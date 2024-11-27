import PropTypes from "prop-types";
import { useUsers } from "../zustand/useUsers";
import { useAuthStore } from "../zustand/useAuthStore";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";

const UserMobileCard = ({ index, user }) => {
  const { user: loggedInUser, onlineUsers } = useAuthStore();
  const { setSelectedUserToDelete, changeRole, setRoleSwitchUser } = useUsers();
  const isOnline = onlineUsers.includes(user._id);
  function RoleChange(role, id) {
    setRoleSwitchUser(id);
    changeRole(role);
  }
  return (
    <div className="bg-base-100 p-6 shadow-sm cursor-pointer hover:shadow-lg  hover:shadow-accent shadow-primary card">
      <div className="flex items-center mb-4 space-x-4">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={user.profileImg} alt="Avatar" />
          </div>
        </div>
        <div className="grow">
          <div className="flex justify-between items-center">
            <h1 className="text-md font-medium">{user.name}</h1>
            <div
              className={`badge badge-md capitalize w-20 ${
                isOnline ? "badge-success " : "badge-neutral "
              }`}
            >
              {isOnline ? "Active" : "Inactive"}
            </div>
          </div>
          <p className="text-xs mt-1 text-base-content/70">{user.email}</p>

          <p className="text-sm">
            Role :{" "}
            <span className="text-primary">
              {user.role.slice(0, 1).toUpperCase() + user.role.slice(1)}
            </span>
          </p>
        </div>

        {/* --------buttons------------------ */}
      </div>
      <div className="grid grid-cols-2 gap-2 font-normal ">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={` btn btn-sm btn-outline btn-info flex flex-nowrap ${
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
          className={` btn btn-sm btn-outline btn-error ${
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
    </div>
  );
};

UserMobileCard.propTypes = {
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

export default UserMobileCard;
