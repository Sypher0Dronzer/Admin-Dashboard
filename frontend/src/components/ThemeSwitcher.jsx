import { useTheme } from "../zustand/useTheme";

const ThemeSwitcher = () => {
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
    // <div className={`dropdown dropdown-down`}>
    //   <div tabIndex={0} role="button" className="btn">
    //     Theme
    //     <svg
    //       width="12px"
    //       height="12px"
    //       className="inline-block h-2 w-2 fill-current opacity-60"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 2048 2048"
    //     >
    //       <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    //     </svg>
    //   </div>
    //   <ul
    //     tabIndex={0}
    //     className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl overflow-auto max-h-[50vh]"
    //   >
    //     {[
    //       "light",
    //       "dark",
    //       "cupcake",
    //       "bumblebee",
    //       "emerald",
    //       "corporate",
    //       "synthwave",
    //       "retro",
    //       "valentine",
    //       "halloween",
    //       "garden",
    //       "forest",
    //       "aqua",
    //       "lofi",
    //       "pastel",
    //       "fantasy",
    //       "wireframe",
    //       "black",
    //       "luxury",
    //       "dracula",
    //       "cmyk",
    //       "autumn",
    //       "business",
    //       "acid",
    //       "lemonade",
    //       "night",
    //       "coffee",
    //       "winter",
    //     ].map((themeOption) => (
    //       <li key={themeOption}>
    //         <input
    //           type="radio"
    //           name="theme-dropdown"
    //           className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
    //           aria-label={
    //             themeOption.charAt(0).toUpperCase() + themeOption.slice(1)
    //           }
    //           value={themeOption}
    //           onChange={() => themeSwitcher(themeOption)}
    //         />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="grid grid-cols-5 gap-4">
      {themes.map((theme, indx) => {
        return (
          
            <div key={indx} onClick={()=> themeSwitcher(theme)}
              className="bg-base-100 py-2 rounded-md text-base-content w-full cursor-pointer font-sans"
              data-theme={theme}
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
                <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
                <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                  <div className="font-bold">{theme}</div>{" "}
                  <div className="flex flex-wrap gap-1">
                    <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-primary-content text-sm font-bold">
                        A
                      </div>
                    </div>{" "}
                    <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-secondary-content text-sm font-bold">
                        A
                      </div>
                    </div>{" "}
                    <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-accent-content text-sm font-bold">A</div>
                    </div>{" "}
                    <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-neutral-content text-sm font-bold">
                        A
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
