import { IoAdd } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import ProjectCard from "./ProjectCard";
import projects from "./dummy/dummyProjects";

const ProjectManagement = () => {
  return (
    <div >
       <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-bold">Projects</h1>
          <p className="badge badge-primary">126</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
          <FiFilter className="text-lg " />

          </button>
          <button className="btn btn-xs sm:btn-sm btn-primary">
            <IoAdd className="text-lg" /> <p>Add New Project</p>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-hidden grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} detail={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
