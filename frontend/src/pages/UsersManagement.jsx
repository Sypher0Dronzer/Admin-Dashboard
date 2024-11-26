import { FiFilter } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import { useUsers } from "../zustand/useUsers";
import UsersTable from "../components/UsersTable";
import CreateNewUser from "../components/CreateNewUser";
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
    <div className="bg-base-300 p-6 pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
      <LeftNav />
      <Navbar />
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-bold">Users</h1>
          <p className="badge badge-primary">{allUsers?.length}</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-square btn-ghost btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
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
        <dialog
          id="delete_confirmation_modal"
          className="w-screen flex justify-center bg-transparent"
        >
          <div className="modal-box bg-neutral">
            
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
        <table className="table">
          {/* head */}
          <thead className="bg-primary text-primary-content">
            <tr className="text-lg">
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Projects</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user, index) => (
              <UsersTable key={index} index={index} user={user}></UsersTable>
              // <tr
              //   key={index}
              //   className={`${index % 2 == 0 ? "bg-base-100" : "bg-base-200"}`}
              // >
              //   <th>{index + 1}</th>
              //   <td>
              //     <div className="flex items-center gap-3">
              //       <div className="avatar">
              //         <div className="mask mask-squircle h-12 w-12">
              //           <img
              //             src={user.profileImg}
              //             alt={`${user.name}'s profile`}
              //           />
              //         </div>
              //       </div>
              //       <div>
              //         <div className="font-bold">{user.name}</div>
              //         <div className="text-sm opacity-50">{user.email}</div>
              //       </div>
              //     </div>
              //   </td>
              //   <td>
              //     <p className="capitalize">{user.role}</p>
              //   </td>
              //   <td>
              //     {user.projects.map((project, index) => (
              //       <span key={index}>
              //         {project?.name}
              //         <br />
              //       </span>
              //     ))}
              //   </td>
              //   <td>
              //     <div
              //       className={`badge badge-lg capitalize w-20 ${
              //         user.status === "active"
              //           ? "badge-success text-success-content"
              //           : "badge-error text-error-content"
              //       }`}
              //     >
              //       {user.status}
              //     </div>
              //   </td>
              //   <td>
              //     <div className="flex gap-2 font-normal">
              //       <button
              //         className={`${
              //           index % 2 == 0 ? "bg-base-200" : "bg-base-100"
              //         } btn btn-sm hover:btn-info`}
              //       >
              //         <CiCircleMore className="text-lg" /> More
              //       </button>
              //       <button
              //         className={`${
              //           index % 2 == 0 ? "bg-base-200" : "bg-base-100"
              //         } btn btn-sm hover:btn-error`}
              //       >
              //         {" "}
              //         <AiOutlineDelete className="text-lg" />
              //         Delete
              //       </button>
              //     </div>
              //   </td>
              // </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot className="">
            <tr className="text-lg">
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Projects</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
