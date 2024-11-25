import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";

export const useProjects = create((set) => ({
  projects: null,
  isLoading: false,
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
  deleteProject: () => {
    set({ user: null });
  },
  createProject: (data) => {
    set({ user: data });
  },
  addMemver:()=>{},
  removeMemver:()=>{},
}));
