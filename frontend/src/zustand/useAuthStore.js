import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  authCheck: async () => {
    try {
      set({ isLoading: true });

      // Get the backend URL from the useBackendUrl store
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.get(`${backendUrl}/api/auth/authcheck`, {
        withCredentials: true, // For sending cookies
      });

      set({ user: res.data });
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
