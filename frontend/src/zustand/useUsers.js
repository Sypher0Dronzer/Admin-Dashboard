import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";

export const useUsers = create((set) => ({
  allUsers: null,
  isLoading: false,
  getAllUsers: async () => {
    try {
      set({ isLoading: true });

      // Get the backend URL from the useBackendUrl store
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.get(`${backendUrl}/api/auth/getAllUsers`, {
        withCredentials: true, // For sending cookies
      });
{console.log(res.data)}
      set({ allUsers: res.data.users });
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
