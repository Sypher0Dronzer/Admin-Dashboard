import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 px-6 fixed left-16 top-0 z-10 right-0  bg-base-100 border-t-0 border-[1px] border-r-0 ">
      <div className="flex gap-4">
        <button  className="btn btn-sm btn-ghost hover:text-primary-content text-primary hover:bg-primary" onClick={() => navigate("/permissions")} >
          Permissions
        </button>
        <button  className="btn btn-sm btn-ghost hover:text-primary-content text-primary hover:bg-primary " onClick={() => navigate("/users")}>
          Users Management
        </button>
        <button  className="btn btn-sm btn-ghost hover:text-primary-content text-primary hover:bg-primary" onClick={() => navigate("/projects")}>
          Project Management
        </button>
      </div>
      <div className="flex items-center gap-4">
        <label className="input input-xs sm:input-sm input-bordered flex items-center gap-2">
          <IoIosSearch className="text-lg" />
          <input type="text" className="grow" placeholder="Search Here" />
        </label>
        <button className="btn btn-square btn-ghost btn-xs sm:btn-sm hover:text-primary-content text-primary hover:bg-primary">
          <FaRegBell className="text-lg" />
        </button>
        <div className="avatar online">
          <div className="size-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
