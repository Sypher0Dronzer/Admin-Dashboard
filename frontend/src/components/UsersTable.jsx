import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { useUsers } from "../zustand/useUsers";
import { useAuthStore } from "../zustand/useAuthStore";

const UsersTable = ({ index, user }) => {
  const { user: loggedInUser,onlineUsers } = useAuthStore();
  const { setSelectedUserToDelete, changeRole, setRoleSwitchUser } = useUsers();
  const isOnline=onlineUsers.includes(user._id)

  function RoleChange(role, id) {
    setRoleSwitchUser(id);
    changeRole(role);
  }
  return (
    <tr
      key={index}
      className={`${index % 2 == 0 ? "bg-base-100" : "bg-base-200"}`}
    >
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user.profileImg} alt={`${user.name}'s profile`} />
            </div>
          </div>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="lg:text-sm text-xs opacity-70">{user.email}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="capitalize">{user.role}</p>
      </td>
      <td className="hidden lg:block  gap-y-1">
        {user.projects.map((project, index) => (
          <p key={index} className="lg:text-sm">
            {project?.name}
          </p>
        ))}
      </td>
      <td>
        <div
          className={`badge badge-md capitalize w-20 ${
            isOnline 
              ? "badge-accent"
              : "badge-neutral "
          }`}
        >
          {
            isOnline 
              ? "Active"
              : "Inactive"
          }
        </div>
      </td>
      <td>
        <div className="flex gap-2 font-normal flex-wrap">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={` btn btn-sm min-w-24 btn-outline btn-info flex flex-nowrap ${
                user._id === loggedInUser._id ||
                (user.role == "manager" && loggedInUser.role !== "manager")
                  ? "btn-disabled"
                  : "btn-enabled"
              }`}
            >
              <CiCircleMore className="text-lg" /> More
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-neutral text-neutral-content rounded-box z-[1] w-52 p-2 shadow"
            >
              {user.role === "contributor" ? (
                <li>
                  <button
                    onClick={() => {
                      RoleChange("admin", user._id);
                    }}
                  >
                    Make Admin
                  </button>
                </li>
              ) : user.role === "admin" ? (
                <>
                  {loggedInUser.role == "manager" ? (
                    <li>
                      <button
                        onClick={() => {
                          RoleChange("manager", user._id);
                        }}
                      >
                        Make Manager
                      </button>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <button
                      onClick={() => {
                        RoleChange("contributor", user._id);
                      }}
                    >
                      Demote to Contributor
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => {
                        RoleChange("admin", user._id);
                      }}
                    >
                      Demote to Admin
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        RoleChange("contributor", user._id);
                      }}
                    >
                      Demote to Contributor
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          <button
            className={` btn btn-sm btn-outline btn-error min-w-24  ${
              user._id === loggedInUser._id ||
              (user.role == "manager" && loggedInUser.role !== "manager")
                ? "btn-disabled"
                : ""
            }`}
            onClick={() => {
              setSelectedUserToDelete(user._id);
              document.getElementById("delete_confirmation_modal").showModal();
            }}
          >
            <AiOutlineDelete className="text-lg" />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

UsersTable.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["active", "inactive"]),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default UsersTable;
