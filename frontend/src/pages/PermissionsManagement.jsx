import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import { usePermissions } from "../zustand/usePermissions";
import MobileNav from "../components/MobileNav";
const PermissionsManagement = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);
const {allPermissions,deletePermission}=usePermissions()
  
  return (
    <div className="bg-base-300 p-6 lg:pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
      <LeftNav />
      <Navbar />
      <MobileNav/>

      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-semibold">Permissions Requested</h1>
          <p className="badge badge-primary">{allPermissions.length}</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
          <FiFilter className="text-lg " />

          </button>
          
        </div>
      </div>

      <div className="space-y-4 mt-4">
      {allPermissions
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort permissions in descending order based on createdAt
  .map((permission) => {
    // Formatting the date
    const createdDate = new Date(permission.createdAt);
    const formattedDate = `${String(createdDate.getDate()).padStart(2, "0")}/${String(
  createdDate.getMonth() + 1
).padStart(2, "0")}/${createdDate.getFullYear()} at  ${String(createdDate.getHours()).padStart(2, "0")}:${String(
  createdDate.getMinutes()
).padStart(2, "0")}`;

    return (
      <div
        key={permission._id}
        className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${
          selectedMessage === permission._id ? "collapse-open" : "collapse-close"
        }`}
      >
        <input
          type="checkbox"
          onChange={() =>
            setSelectedMessage(
              selectedMessage === permission._id ? null : permission._id
            )
          }
          className="peer"
        />
        <div className="collapse-title text-lg font-medium flex md:flex-row flex-col md:items-center gap-x-4 gap-y-2">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2">

          <span className="font-bold">{permission.senderId.name}</span> {" "}
          <span
            className={`badge badge-md ${
              permission.subject === "Admin Role Request"
                ? "badge-secondary"
                : permission.subject === "Manager Role Request"
                ? "badge-primary"
                : "badge-accent"
            }`}
          >
            {permission.subject}
          </span>
          </div>
          <p className="text-sm text-gray-500">Requested on: {formattedDate}</p>

        </div>
        <div className="collapse-content">
          <div className="flex justify-between items-center">
            <div>
<p className="text-sm mb-1">From : {permission.senderId.email}</p>
          <p className="mb-4">{permission.body}</p>
            </div>
          {/* <p className="text-sm text-gray-500">Requested on: {formattedDate}</p> */}
          <button
            className="btn btn-primary min-h-[10px] h-10"
            onClick={() => {
              deletePermission(permission._id);
            }}
          >
            Delete
          </button>
          </div>
          {/* {permission.subject === "Project Joining Request" && (
            <button className="btn btn-primary btn-sm">Add to Project Team</button>
          )}
          {permission.subject === "Admin Role Request" && (
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => handleConfirm(permission.id, "make admin")}
            >
              Make Admin
            </button>
          )} */}
        </div>
      </div>
    );
  })}

      </div>
    </div>
  )
}

export default PermissionsManagement
