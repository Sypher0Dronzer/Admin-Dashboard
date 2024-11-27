import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useMobileNav } from "../zustand/useMobileNav";

const MobileNav = () => {
  const { logout } = useLogout();
  const {isNavOpen,setIsNavOpen}=useMobileNav()
  return (
    <button className={`fixed cursor-default h-screen transition-[left] duration-150 z-10 w-screen bg-base-100/50 top-0 lg:hidden ${isNavOpen?'left-0': '-left-full'}`} onClick={()=>{setIsNavOpen(false)}}>
      <div className={`fixed transition-[left] duration-300 h-screen min-w-[max(35vw,300px)] z-10 top-0 ${isNavOpen?'left-0': '-left-full'}  bg-base-100 lg:hidden flex flex-col items-center px-4 py-8 justify-between`}>

<p></p>
        <ul className="gap-y-4 w-full flex flex-col basis-3/4">
        <Link to='/'>
          <li>
            <button className="nav_button">Home</button>
          </li>
        </Link>
        <Link to='/permissions'>
          <li>
            <button className="nav_button">Permissions</button>
          </li>
        </Link>
          <Link to='/users'>
          <li>
            <button className="nav_button">User Management</button>
          </li>
          </Link>
          <Link to='/projects'>
          <li>
            <button className="nav_button">Project Management</button>
          </li>
          </Link>
          <Link to='/requestpermission'>
          <li>
            <button className="nav_button">Seek Permission</button>
          </li>
          </Link>
        
          
         
        </ul>
        <ul className="gap-y-2 w-full flex flex-col">
        <Link to='/settings'>
        <li>
            <button className="nav_button">Settings</button>
          </li>
            </Link>
          <li>
            <button onClick={async () => {
            await logout();
          }} className="nav_button">Logout</button>
          </li>
        </ul>

        {/* <ul className="flex items-center w-full flex-col gap-y-8 basis-1/2">
        <img src={logo} className="w-12" alt="" />


        

        <Link to="/requestpermission">
          <button className="btn btn-square btn-ghost hover:text-primary-content hover:bg-primary">
            <IoMailOpenOutline className="size-6" />
          </button>
        </Link>

      </ul>
      <div className="flex flex-col gap-y-4">
        <Link to="/settings">
          <button className="btn btn-square btn-ghost hover:text-primary-content hover:bg-primary">
            <IoSettingsOutline className="size-6" />
          </button>
        </Link>
        <button
          className="btn btn-square btn-ghost hover:text-primary-content hover:bg-primary"
          onClick={async () => {
            await logout();
          }}
        >
          <RiLogoutCircleRLine className="size-6" />
        </button>
      </div> */}
      </div>
    </button>
  );
};

export default MobileNav;
