import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../zustand/useAuthStore";
import axios from "axios";
import useBackendUrl from "../zustand/useBackendUrl";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { loginUser } = useAuthStore();
  const backendUrl = useBackendUrl((state) => state.backendUrl);

  const signup = async ({ email, name, password }) => {
    const success = handleInputErrors({ email, name, password });
    if (!success) return;

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/signup`,
        { email, name, password },
        { withCredentials: true }
      );

      if (data.error) {
        throw new Error(data.error);
      }
      loginUser();
      toast.success("User signed in!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ email, name, password }) {
	  if (!email || !name || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
