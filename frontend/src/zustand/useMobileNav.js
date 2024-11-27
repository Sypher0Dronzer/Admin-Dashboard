import { create } from "zustand";

export const useMobileNav = create((set,get) => ({
  isNavOpen: false,
  
  setIsNavOpen:(status)=>{
    set({isNavOpen:status})
  },
  
}));
