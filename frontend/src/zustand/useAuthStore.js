import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";
import { useProjects } from "./useProjects";
import { useUsers } from "./useUsers";
import { io } from "socket.io-client";
import {usePermissions} from "./usePermissions"
export const useAuthStore = create((set,get) => ({
  user: null,
  isLoading: false,
  userRole:null,
  socket:null,
  onlineUsers: [],
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
      await usePermissions.getState().getAllPermissions()
      await get().connectSocket();
      await get().setUserRole()
    } catch (error) {
      console.log("Auth check error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  logoutUser: () => {
    set({ user: null });
    get().disconnectSocket();
  },
  loginUser: async() => {
    await get().authCheck()
  },
  connectSocket:()=>{
    const { user } = get();
    const backendUrl = useBackendUrl.getState().backendUrl;
    const socket = io(backendUrl,{
      query:{
        userId:user._id
      }
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
