import { create } from "zustand";
const useBackendUrl = create((set) => ({
  backendUrl: "http://localhost:5000", // Define your backend URL here
}));

export default useBackendUrl;
