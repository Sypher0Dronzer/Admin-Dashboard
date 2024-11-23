import { FiFilter } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import users from "./dummy/dummyUsers";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
const UsersManagement = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-bold">Users</h1>
          <p className="badge badge-primary">{users.length}</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-square btn-ghost btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
            <FiFilter className="text-lg" />
          </button>
          <button className="btn btn-xs sm:btn-sm btn-primary flex items-center gap-2">
            <IoAdd className="text-lg" /> <p>Add New User</p>
          </button>
        </div>
      </div>

      {/* The table */}
      <div className="overflow-x-auto mt-4">
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
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${index % 2 == 0 ? "bg-base-100" : "bg-base-200"}`}
              >
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.profilePic}
                          alt={`${user.name}'s profile`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="capitalize">{user.role.join(", ")}</p>
                </td>
                <td>{user.projects.join(", ")}</td>
                <td>
                  <div
                    className={`badge badge-lg capitalize w-20 ${
                      user.status === "active"
                        ? "badge-success text-success-content"
                        : "badge-error text-error-content"
                    }`}
                  >
                    {user.status}
                  </div>
                </td>
                <td>
                  <div className="flex gap-2 font-normal">
                    <button
                      className={`${
                        index % 2 == 0 ? "bg-base-200" : "bg-base-100"
                      } btn btn-sm hover:btn-info`}
                    >
                      <CiCircleMore className="text-lg" /> Details
                    </button>
                    <button
                      className={`${
                        index % 2 == 0 ? "bg-base-200" : "bg-base-100"
                      } btn btn-sm hover:btn-error`}
                    >
                      {" "}
                      <AiOutlineDelete className="text-lg" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
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
