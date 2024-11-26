import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";
import { useProjects } from "./useProjects";
import { useUsers } from "./useUsers";

export const useAuthStore = create((set,get) => ({
  user: null,
  isLoading: false,
  userRole:null,
  setUserRole:()=>{
    set({userRole:get().user.role})
  },
  authCheck: async () => {
    try {
      set({ isLoading: true });
      await useProjects.getState().allProjects();
      await useUsers.getState().getAllUsers();
      // Get the backend URL from the useBackendUrl store
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.get(`${backendUrl}/api/auth/authcheck`, {
        withCredentials: true, // For sending cookies
      });

      set({ user: res.data.user });
      get().setUserRole()
    } catch (error) {
      console.log("Auth check error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  logoutUser: () => {
    set({ user: null });
  },
  loginUser: (data) => {
    set({ user: data });
  },
}));
