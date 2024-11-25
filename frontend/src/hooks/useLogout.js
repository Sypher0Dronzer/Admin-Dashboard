import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../zustand/useAuthStore";
import axios from "axios";
import useBackendUrl from "../zustand/useBackendUrl";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { logoutUser } = useAuthStore();
  const backendUrl = useBackendUrl((state) => state.backendUrl);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${backendUrl}/api/auth/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }
      if (data.success) {
        logoutUser();
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
