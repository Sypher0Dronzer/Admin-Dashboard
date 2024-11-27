import { FiFilter } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import { useUsers } from "../zustand/useUsers";
import UsersTable from "../components/UsersTable";
import CreateNewUser from "../components/CreateNewUser";
import UserMobileCard from "../components/UserMobileCard";
import MobileNav from "../components/MobileNav";
const UsersManagement = () => {

  const { allUsers, isLoading,deleteUser,setSelectedUserToDelete } = useUsers();
  // useEffect(() => {
  //   getAllUsers();
  // }, []);
  if (isLoading) {
    return (
      <div className="h-screen bg-base-300 flex items-center justify-center">
        <span className="loading loading-bars text-accent loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="bg-base-300 p-6 lg:pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
      <LeftNav />
      <Navbar />
      <MobileNav/>
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-semibold">Users</h1>
          <p className="badge badge-primary">{allUsers?.length}</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-square  btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
            <FiFilter className="text-lg" />
          </button>
          <button className="btn btn-xs sm:btn-sm btn-primary flex items-center gap-2"
           onClick={() => document.getElementById("new_user_modal").showModal()}>
            <IoAdd className="text-lg" /> <p>Add New User</p>
          </button>
        </div>
      </div>

      {/* The table */}
      <div className=" mt-4">
        {/* ---------------delete user----------- */}
        <dialog
          id="delete_confirmation_modal"
          className="modal"
        >
          <div className="modal-box">
            
            <h1 className="text-xl font-semibold mb-2">Warning</h1>
            <p className="text-lg">Are you sure you want to delete this user?</p>
            <p className="text-md mb-4 text-secondary font-thin">
                Please note that deleting this user will also remove any
                projects where they are the project lead.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-success" onClick={deleteUser}>Confirm</button>
              <form method="dialog">
              <button className="btn btn-error" onClick={()=>setSelectedUserToDelete(null)}>
                Cancel
              </button>
            </form>
            </div>
          </div>
        </dialog>
        {/* ----------------new user modal --------------------- */}
        <dialog id="new_user_modal" className="modal">
            <div className="modal-box bg-base-200">
              <form method="dialog">
                <button className="btn btn-md sm:btn-lg btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <CreateNewUser></CreateNewUser>
            </div>
          </dialog>
          {/*------------------------- table ---------------------*/}
        <table className="hidden sm:table">
          <thead className="bg-primary ">
            <tr className="text-lg text-primary-content">
              <th></th>
              <th className="font-semibold">Name</th>
              <th className="font-semibold">Role</th>
              <th className="font-semibold hidden lg:block">Projects</th>
              <th className="font-semibold">Status</th>
              <th className="font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user, index) => (
              <UsersTable key={index} index={index} user={user}></UsersTable>
            ))}
          </tbody>
          {/* foot */}
          <tfoot className="bg-primary ">
            <tr className="text-lg text-primary-content">
            <th></th>
              <th className="font-semibold">Name</th>
              <th className="font-semibold">Role</th>
              <th className="font-semibold hidden lg:block">Projects</th>
              <th className="font-semibold">Status</th>
              <th className="font-semibold">Actions</th>
            </tr>
          </tfoot>
        </table>
        {/* -----------mobile devices display------------ */}
        <div className="flex sm:hidden flex-col gap-y-4">
        {allUsers?.map((user,index)=>{
          return <UserMobileCard key={index} index={index} user={user}></UserMobileCard>
        })}
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
