import { create } from "zustand";

export const useTheme = create((set) => {
  // Get the saved theme from local storage or default to 'luxury'
  const savedTheme = localStorage.getItem('theme') || 'luxury';
  document.documentElement.setAttribute('data-theme', savedTheme);

  localStorage.setItem('theme', 'luxury');

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
