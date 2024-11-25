import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../zustand/useAuthStore";
import axios from "axios";
import useBackendUrl from "../zustand/useBackendUrl";


const useLogin = () => {
  const backendUrl = useBackendUrl((state) => state.backendUrl);

  const [loading, setLoading] = useState(false);
  const {loginUser}= useAuthStore()
  const login = async (credentials) => {
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`,credentials, {
        withCredentials: true, // For sending cookies
      });
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (!data.success) {
        toast.error(data.message);
      } else {
        loginUser(data)
        toast.success('Logged in Successfully')
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;
