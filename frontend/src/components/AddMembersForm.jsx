import { useState, useEffect } from 'react';
import { useUsers } from '../zustand/useUsers';
import { useProjects } from '../zustand/useProjects';
import toast from 'react-hot-toast';

const AddMembersForm = () => {
  const { allUsers } = useUsers();
  const { selectedProject,addMembers } = useProjects();
  
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    // Extract user IDs from selectedProject.team
    const teamIds = selectedProject?.team.map((member) => member._id) || [];
    
    // Filter allUsers to exclude those already in the selectedProject.team
    const availableUsers = allUsers.filter(
      (user) => !teamIds.includes(user._id)
    );
    setFilteredUsers(availableUsers);
    }, [selectedProject, allUsers]);
  
  useEffect(() => {
    const teamIds = selectedProject?.team.map((member) => member._id) || [];
  
    // Further filter based on query
    if (query.trim() === '') {
      setFilteredUsers(
        allUsers.filter(
          (user) => !teamIds.includes(user._id)
        )
      );
    } else {
      setFilteredUsers(
        allUsers.filter(
          (user) =>
            !teamIds.includes(user._id) &&
            (user.name.toLowerCase().includes(query.toLowerCase()) ||
             user.email.toLowerCase().includes(query.toLowerCase()))
        )
      );
    }
  }, [query, selectedProject, allUsers]);
  
  const handleSelectUser = (user) => {
    if (!selectedUsers.some((selected) => selected._id === user._id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
    setQuery('');
  };

  const handleRemoveUser = (userId) => {
    setSelectedUsers(selectedUsers.filter((user) => user._id !== userId));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUsers.length === 0) {
      toast.error("Add atleast 1 member");
      return;
    }
    
  
    const projectData =  selectedUsers ;
    addMembers(projectData); 
    setQuery("");
    setSelectedUsers([]);
  };

  return (
    <form className="space-y-4 p-4 overflow-y-hidden" onSubmit={handleSubmit}>
      <h2 className="sm:text-2xl text-xl font-bold text-center mb-4">Add Members</h2>

      {/* Search Input */}
      <div className="form-control w-full mb-4">
        <label htmlFor="search" className="label">
          <span className="label-text">Search Users</span>
        </label>
        <input
          id="search"
          type="text"
          className="input input-bordered w-full"
          autoComplete="off"
          placeholder="Type name or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Filtered Users List */}
      <div className="relative">
        {query && (
          <div className="absolute right-0 left-0 bg-base-300">
            <ul
              className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200 border border-accent rounded"
              style={{
                marginInlineStart: '0',
                paddingInlineStart: '0',
              }}
            >
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <li
                    key={user._id}
                    className="p-2 hover:bg-neutral text-sm text-neutral-content cursor-pointer"
                    onClick={() => handleSelectUser(user)}
                  >
                    {user.name} ({user.email})
                  </li>
                ))
              ) : (
                <li className="p-2">No users found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Selected Users */}
      <div className="mt-4">
        <p className="font-medium">Selected Users:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedUsers.map((user) => (
            <div
              key={user._id}
              className="badge badge-primary gap-2 flex items-center"
            >
              {user.name}
              <button
                type="button"
                onClick={() => handleRemoveUser(user._id)}
                className="text-primary-content hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full">
        Add Members
      </button>
    </form>
  );
};

export default AddMembersForm;
