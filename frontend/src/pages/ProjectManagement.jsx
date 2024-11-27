import { IoAdd } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

import ProjectCard from "./ProjectCard";
// import projects from "./dummy/dummyProjects";
import Navbar from "../components/Navbar";
import LeftNav from "../components/LeftNav";
import { useProjects } from "../zustand/useProjects";
import NewProjectForm from "../components/NewProjectForm";
import AddMembersForm from "../components/AddMembersForm";
import RemoveMembersForm from "../components/RemoveMembersForm";
import { useAuthStore } from "../zustand/useAuthStore";
import MobileNav from "../components/MobileNav";

const ProjectManagement = () => {
  const { projects, isLoading } = useProjects();
  const {setSelectedProject}=useProjects()
  const {userRole}=useAuthStore()


  // useEffect(() => {
  //   allProjects();
  // }, []);

  // Render loading state
  if (isLoading) {
    return (
      <div className="h-screen bg-base-300 flex items-center justify-center">
        <span className="loading loading-bars text-accent loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-300 p-6 lg:pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200">
      <LeftNav />
      <Navbar />
      <MobileNav/>

      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-lg font-semibold">Projects</h1>
          <p className="badge badge-primary">{projects?.length}</p>
        </div>
        <div className="flex gap-x-4">
          <button className="btn btn-square btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
            <FiFilter className="text-lg" />
          </button>
          {userRole !=="contributor"&&<button
            className="btn btn-xs sm:btn-sm btn-primary"
            onClick={() => document.getElementById("new_project_modal").showModal()}
          >
            <IoAdd className="text-lg" /> <p>Add New Project</p>
          </button>}
          {/* -------------new project modal--------- */}
          {userRole !=="contributor" && <dialog id="new_project_modal" className="modal">
            <div className="modal-box max-w-[400px] bg-base-200">
              <form method="dialog">
                <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <NewProjectForm></NewProjectForm>
            </div>
          </dialog>}

          {/* -------------new member modal--------- */}
          {userRole !=="contributor" &&<dialog id={"new_member_modal"} className="modal ">
                <div className="modal-box max-w-[400px] bg-base-200">
                  <form method="dialog">
                    <button className="btn btn-md sm:btn-lg btn-circle btn-ghost absolute right-2 top-2"
                    onClick={()=>{setSelectedProject(null)
                    }}>
                      ✕
                    </button>
                  </form>
                  <AddMembersForm></AddMembersForm>
                </div>
              </dialog>}

              {/* -------------remove member modal--------- */}
          {userRole !=="contributor" &&<dialog id={"remove_member_modal"} className="modal ">
                <div className="modal-box bg-base-200 max-w-[400px]">
                  <form method="dialog">
                    <button className="btn btn-md sm:btn-lg btn-circle btn-ghost absolute right-2 top-2"
                    onClick={()=>{setSelectedProject(null)
                    }}>
                      ✕
                    </button>
                  </form>
                  <RemoveMembersForm></RemoveMembersForm>
                </div>
              </dialog>}
        </div>
      </div>
{/* --------------projects grid------------- */}
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
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
