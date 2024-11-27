import { create } from "zustand";
import axios from "axios";
import useBackendUrl from "./useBackendUrl";
import toast from "react-hot-toast";

export const usePermissions = create((set, get) => ({
  allPermissions: null,
  getAllPermissions: async () => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.get(
        `${backendUrl}/api/permissions/getAllPermissions`,
        {
          withCredentials: true, // For sending cookies
        }
      );

      set({ allPermissions: res.data.permissions });
    } catch (error) {
      console.log("Error In loading projects", error);
    }
  },
  deletePermission: async (id) => {
    try {
      const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.delete(
        `${backendUrl}/api/permissions/delete/${id}`,
        {
          withCredentials: true, // For sending cookies
        }
      );
      toast.success(res.data.message);
      get().getAllPermissions()
    } catch (error) {
      console.log(error);
      toast.error(error.response.message);
    }
  },
  createPermission:async(credentials)=>{
    try {
        const backendUrl = useBackendUrl.getState().backendUrl;

      const res = await axios.post(
        `${backendUrl}/api/permissions/create`,credentials,
        {
          withCredentials: true, // For sending cookies
        }
      );
      toast.success(res.data.message);
      get().getAllPermissions()
    } catch (error) {
        console.log(error);
      toast.error(error.response.message);
    }
  }
}));
