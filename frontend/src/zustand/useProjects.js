import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";
import toast from "react-hot-toast";
import { useUsers } from "./useUsers";

export const useProjects = create((set, get) => ({
  projects: null,
  isLoading: false,
  selectedProject: null,
  setSelectedProject: (project) => {
    set({ selectedProject: project });
  },
  allProjects: async () => {
    try {
      set({ isLoading: true });

      // Get the backend URL from the useBackendUrl store
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.get(`${backendUrl}/api/projects/allProjects`, {
        withCredentials: true, // For sending cookies
      });

      set({ projects: res.data.projects });
    } catch (error) {
      console.log("Error In loading projects", error);
    } finally {
      set({ isLoading: false });
    }
  },
  deleteProject: async (id) => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.delete(
        `${backendUrl}/api/projects/delete/${id}`,
        {
          withCredentials: true, // For sending cookies
        }
      );

      get().allProjects();
      await useUsers.getState().getAllUsers();
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in deleting project", error.response.data.message);
      toast.error(error.response.data.message);
    }
  },
  createProject: async (credentials) => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.post(
        `${backendUrl}/api/projects/create`,
        credentials,
        {
          withCredentials: true, // For sending cookies
        }
      );
      await get().allProjects();
      await useUsers.getState().getAllUsers();
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in creating project", error.response.data.message);
      toast.error(error.response.data.message);
    }
  },
  addMembers: async (selectedUsers) => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;
      const credentials = {
        newMembers: selectedUsers,
        projectId: get().selectedProject._id,
      };
      const res = await axios.post(
        `${backendUrl}/api/projects/addMembers`,
        credentials,
        {
          withCredentials: true, // For sending cookies
        }
      );
      await get().allProjects();
      await useUsers.getState().getAllUsers();
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error:", error.response.data.message);
      toast.error(error.response.data.message);
    }
  },
  removeMembers: async(selectedUsers) => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;
      const credentials = {
        removeMembers: selectedUsers,
        projectId: get().selectedProject._id,
      };
      const res = await axios.post(
        `${backendUrl}/api/projects/removeMembers`,
        credentials,
        {
          withCredentials: true, // For sending cookies
        }
      );
      await get().allProjects();
      await useUsers.getState().getAllUsers();
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error:", error.response.data.message);
      toast.error(error.response.data.message);
    }
  },
}));
