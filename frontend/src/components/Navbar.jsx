import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center  px-[2vw] py-4 sm:px-6 fixed left-0 md:left-16 top-0 z-10 right-0 border-base-content/20 bg-base-100 border-t-0 border-[1px] border-r-0 ">
      <div className="flex items-center gap-x-4">
        <button className="visible md:hidden btn font-medium btn-sm btn-ghost btn-circle">
          <IoMenuOutline className="size-6" />
        </button>
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
        <button className="btn font-medium btn-square btn-ghost btn-xs sm:btn-sm   hover:bg-primary hover:text-primary-content">
          <FaRegBell className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
