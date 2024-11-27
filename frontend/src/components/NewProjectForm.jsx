import { useState } from "react";
import toast from "react-hot-toast";
import { useProjects } from "../zustand/useProjects";

const NewProjectForm = () => {
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const {createProject}=useProjects()

  const handleAddTag = (e) => {
    e.preventDefault(); // Prevent form submission if 'Enter' is pressed
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      const capitalizedTag = tagInput
        .trim()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      setTags([...tags, capitalizedTag]);
      setTagInput("");
    }
  };
  

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Project name is required");
      return;
    }
    if (tags.length === 0) {
      toast.error("At least 1 tag is required");
      return;
    }
    const capitalizedName = name
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  
    const projectData = { name: capitalizedName, tags };
    createProject(projectData); 
    setName("");
    setTags([]);
  };
  

  return (
    <form onSubmit={handleSubmit} >
      <h2 className="md:text-2xl text-xl  font-bold text-center mb-4">Create New Project</h2>
      
      {/* Project Name */}
      <div className="form-control w-full mb-4">
        <label htmlFor="name" className="label">
          <span className="label-text">Project Name</span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-md input-bordered w-full"
          placeholder="Enter project name"
          required
        />
      </div>
      
      {/* Tags */}
      <div className="form-control w-full mb-4">
        <label htmlFor="tags" className="label">
          <span className="label-text">Tags</span>
        </label>
        <div className="flex">
          <input
            type="text"
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTag(e)}
            className="input input-md input-bordered flex-grow"
            placeholder="Type a tag and press Enter or Add"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="btn btn-md btn-primary ml-2"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-secondary gap-2">
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-secondary-content hover:text-red-200"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Submit Button */}
      <button type="submit" className="btn btn-accent w-full">
        Create Project
      </button>
    </form>
  );
};

export default NewProjectForm;
