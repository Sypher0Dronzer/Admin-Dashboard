import { useState, useEffect } from 'react';
import { useProjects } from '../zustand/useProjects';
import toast from 'react-hot-toast';

const RemoveMembersForm = () => {
  const { selectedProject, removeMembers } = useProjects();
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    if (!selectedProject?.team) return;

    // Filter members based on the query and exclude projectLead
    const filtered = selectedProject.team.filter(
      (member) =>
        member._id !== selectedProject.projectLead._id && // Exclude projectLead
        (member.name.toLowerCase().includes(query.toLowerCase()) ||
          member.email.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredUsers(filtered);
  }, [query, selectedProject]);

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
      toast.error('Select at least one member to remove');
      return;
    }
    // console.log(selectedUsers)


    const memberIdsToRemove = selectedUsers.map((user) => user._id);
    removeMembers(memberIdsToRemove); // Adjust as per your backend integration
    toast.success('Members removed successfully');
    setSelectedUsers([]);
    setQuery('');
  };

  return (
    <form className="space-y-4 p-4" onSubmit={handleSubmit}>
      <h2 className="sm:text-2xl text-xl font-bold text-center mb-4">Remove Members</h2>

      {/* Search Input */}
      <div className="form-control w-full mb-4">
        <label htmlFor="search" className="label">
          <span className="label-text">Search Members</span>
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

      {/* Filtered Members List */}
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
                    className="p-2 hover:bg-neutral text-neutral-content cursor-pointer"
                    onClick={() => handleSelectUser(user)}
                  >
                    {user.name} ({user.email})
                  </li>
                ))
              ) : (
                <li className="p-2">No members found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Selected Members */}
      <div className="mt-4">
        <p className="font-medium">Selected Members:</p>
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
      <button type="submit" className="btn btn-secondary w-full">
        Remove Members
      </button>
    </form>
  );
};

export default RemoveMembersForm;
