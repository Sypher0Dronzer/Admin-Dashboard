import { create } from "zustand";

export const useTabSelection = create((set) => {
  // Get the saved theme from local storage or default to 'luxury'

  return {
    selectedTab: null,
    tabSwitcher: (selectedTab) => {
      set({ selectedTab });
    },
  };
});
