import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { useMobileNav } from "../zustand/useMobileNav";
const Navbar = () => {
  const {setIsNavOpen}=useMobileNav()
  return (
    <div className="flex justify-between items-center  px-[5vw] py-4 sm:px-6 fixed left-0 lg:left-16 top-0 z-10 right-0 border-base-content/20 bg-base-100 border-t-0 border-[1px] border-r-0 ">
        <button onClick={()=>{setIsNavOpen(true)}} className="visible lg:hidden btn font-medium btn-sm btn-ghost btn-circle">
          <IoMenuOutline className="size-8" />
        </button>
      <div className="sm:flex items-center gap-x-4 hidden">
        <Link to="/permissions">
          <button className="btn font-medium btn-sm btn-ghost   hover:bg-primary hover:text-primary-content">
            Permissions
          </button>
        </Link>
        <Link to="/users">
          <button className="btn font-medium btn-sm btn-ghost   hover:bg-primary hover:text-primary-content ">
            Users Management
          </button>
        </Link>
        <Link to="/projects">
          <button className="btn font-medium btn-sm btn-ghost   hover:bg-primary hover:text-primary-content">
            Project Management
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* <p className="">Wlecome back !</p> */}
        <p className="text-primary font-medium tracking-wider md:text-lg">Dashboard</p>
      </div>
    </div>
  );
};

export default Navbar;
