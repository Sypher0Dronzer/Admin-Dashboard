import  { useState } from "react";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../zustand/useAuthStore";
import { usePermissions } from "../zustand/usePermissions";

const CreatePermissionForm = () => {
  // State to hold the form data
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const {user}=useAuthStore()
  const {createPermission}=usePermissions()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock request - replace this with your actual API call
    const permissionData = {
      subject,
      body,
      senderId: user._id, // Replace with actual sender ID logic
    };

    createPermission(permissionData);

    // Reset the form
    setSubject("");
    setBody("");
  };

  return (
    <div className="bg-base-300 p-6 pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
<LeftNav />
<Navbar />
    <div className="max-w-md mx-auto mt-10">
      <div className="card p-6 bg-base-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Permission</h2>

        <form onSubmit={handleSubmit}>
          {/* Subject Dropdown */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <select
              className="select select-bordered"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="Admin Role Request">Admin Role Request</option>
              <option value="Manager Role Request">Manager Role Request</option>
              <option value="Project Joining Request">Project Joining Request</option>
            </select>
          </div>

          {/* Body Input */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Body</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Enter your request body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CreatePermissionForm;
