import { IoAdd } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import ProjectCard from "./ProjectCard";
// import projects from "./dummy/dummyProjects";
import Navbar from "../components/Navbar";
import LeftNav from "../components/LeftNav";
import { useProjects } from "../zustand/useProjects";
import { useEffect } from "react";

const ProjectManagement = () => {
  const { projects, allProjects, isLoading } = useProjects();

  useEffect(() => {
    allProjects(); 
  }, []);

  // Render loading state
  if(isLoading){
    return (
      <div className="h-screen bg-base-300 flex items-center justify-center">
        <span className="loading loading-bars text-accent loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="bg-base-300 p-6 pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200">
      <LeftNav />
      <Navbar />
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-bold">Projects</h1>
          <p className="badge badge-primary">{projects?.length}</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
            <FiFilter className="text-lg" />
          </button>
          <button className="btn btn-xs sm:btn-sm btn-primary">
            <IoAdd className="text-lg" /> <p>Add New Project</p>
          </button>
        </div>
      </div>

      <div className="overflow-x-hidden grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} detail={project} />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectManagement;
