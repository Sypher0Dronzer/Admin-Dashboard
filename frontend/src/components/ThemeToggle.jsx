import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { useTheme } from "../zustand/useTheme";
import { themes } from "../utils/themes";
const ThemeToggle = () => {
  
  const { themeSwitcher } = useTheme();

  return (
    <div className={`dropdown dropdown-hover dropdown-right `}>
      <div tabIndex={0} role="button">
      <button className="btn btn-square btn-ghost hover:text-primary-content hover:bg-primary">
          <PiPaintBrushBroadDuotone className="size-6" />
        </button>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200 max-h-[40vh]"
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
