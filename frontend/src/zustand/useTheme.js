import { create } from "zustand";

export const useTheme = create((set) => {
  const savedTheme = localStorage.getItem('theme') || 'forest';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // localStorage.setItem('theme', 'forest');

  return {
    theme: savedTheme,
    themeSwitcher: async (selectedTheme) => {
      try {
        set({ theme: selectedTheme });
        localStorage.setItem('theme', selectedTheme); // Save the selected theme to local storage
    document.documentElement.setAttribute('data-theme', selectedTheme);

      } catch (error) {
        console.log(error);
      }
    },
  };
});
