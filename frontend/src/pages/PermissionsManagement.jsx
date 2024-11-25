import { FiFilter } from "react-icons/fi";
import messages from "./dummy/dummyMessages";
import { useState } from "react";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
const PermissionsManagement = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

  const handleConfirm = (messageId, action) => {
    console.log(`Message ID: ${messageId}, Action: ${action}`);
    alert(`You selected to ${action} for message ID: ${messageId}`);
  };
  return (
    <div className="bg-base-300 p-6 pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
      <LeftNav />
      <Navbar />
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-bold">Permissions Requested</h1>
          <p className="badge badge-primary">126</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
          <FiFilter className="text-lg " />

          </button>
          
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${
              selectedMessage === message.id ? "collapse-open" : "collapse-close"
            }`}
          >
            <input
              type="checkbox"
              onChange={() =>
                setSelectedMessage(
                  selectedMessage === message.id ? null : message.id
                )
              }
              className="peer"
            />
            <div className="collapse-title text-lg font-medium flex items-center gap-x-4">
              <span className="font-bold">{message.sender}</span> {" "}
              <span className={`badge badge-md ${message.subject=='Admin Role Request'?'badge-secondary':"badge-primary"}`}>{message.subject}</span>
            </div>
            <div className="collapse-content">
              <p className="mb-4">{message.body}</p>
              <div className="flex gap-4">
                {message.subject === "Project Joining Request" && (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      handleConfirm(message.id, "add to project team")
                    }
                  >
                    Add to Project Team
                  </button>
                )}
                {message.subject === "Admin Role Request" && (
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleConfirm(message.id, "make admin")}
                  >
                    Make Admin
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PermissionsManagement
