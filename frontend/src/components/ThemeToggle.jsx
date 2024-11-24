import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { useTheme } from "../zustand/useTheme";

const ThemeToggle = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  const { themeSwitcher } = useTheme();

  return (
    <div className={`dropdown dropdown-hover dropdown-right `}>
      <div tabIndex={0} role="button">
      <button className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary">
          <PiPaintBrushBroadDuotone className="size-6" />
        </button>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl overflow-auto max-h-[40vh]"
      >
        {themes.map((themeOption) => (
          <li key={themeOption}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={
                themeOption.charAt(0).toUpperCase() + themeOption.slice(1)
              }
              value={themeOption}
              onChange={() => themeSwitcher(themeOption)}
            />
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default ThemeToggle;
