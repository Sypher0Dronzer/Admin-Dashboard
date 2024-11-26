import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";
import {toast} from 'react-hot-toast'
import { useProjects } from "./useProjects";
export const useUsers = create((set,get) => ({
  allUsers: null,
  isLoading: false,
  selectedUserToDelete:null,
  setSelectedUserToDelete:(userToDelete)=>{
    set({selectedUserToDelete:userToDelete})
  },
  roleSwitchUser:null,
  setRoleSwitchUser:(userToSwitchRole)=>{
    set({roleSwitchUser:userToSwitchRole})
  },
  getAllUsers: async () => {
    try {
      set({ isLoading: true });

      // Get the backend URL from the useBackendUrl store
      const backendUrl = useBackendUrl.getState().backendUrl;
      const res = await axios.get(`${backendUrl}/api/users/getAllUsers`, {
        withCredentials: true, // For sending cookies
      });
      set({ allUsers: res.data.users });

    } catch (error) {
      console.log("Error In loading projects", error);
    } finally {
      set({ isLoading: false });
    }
  },
  deleteUser: async() => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;
      const res = await axios.delete(`${backendUrl}/api/users/delete/${get().selectedUserToDelete}`, {
        withCredentials: true, // For sending cookies
      });
      toast.success(res.data.message)
      await useProjects.getState().allProjects();
      await get().getAllUsers()
    } catch (error) {
      toast.error(error.response.data.message)
    };
  },
  createUser: async(credentials) => {
    try {
      console.log(credentials)
      const backendUrl = useBackendUrl.getState().backendUrl;
      const res = await axios.post(`${backendUrl}/api/users/create`,credentials, {
        withCredentials: true, // For sending cookies
      });
      toast.success(res.data.message)
      console.log(res.data.message)
      await get().getAllUsers()
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    };
  },
  changeRole:async(role)=>{
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;
      const credentials={newRole:role,userId: get().roleSwitchUser}
      const res = await axios.post(`${backendUrl}/api/users/rolechange`,credentials, {
        withCredentials: true, // For sending cookies
      });
      toast.success(res.data.message)
      await get().getAllUsers()
    } catch (error) {
      toast.error(error.response.data.message)
    };
  }
}));
