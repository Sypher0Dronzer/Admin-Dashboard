import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import useLogout from '../hooks/useLogout'

const LeftNav = () => {
  const {logout}=useLogout()
  return (
    <div className="fixed h-screen z-10 top-0 left-0  bg-base-100 flex flex-col items-center gap-y-8 px-2 py-4 border-l-0 border-[1px] border-y-0 justify-between">
      <ul className="flex flex-col gap-y-8 basis-1/2">
        <img src={logo} className="w-12" alt="" />

        <button className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary">
          <GoHome className="size-6" />
        </button>

        <button className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary">
          <MdOutlineAnalytics className="size-6" />
        </button>

        <button className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary">
          <MdOutlineDateRange className="size-6" />
        </button>
        <ThemeToggle></ThemeToggle>
      </ul>
      <div className="flex flex-col gap-y-4">
        

        <Link to="/settings">
          <button className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary">
            <IoSettingsOutline className="size-6" />
          </button>
        </Link>
        <button className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary" onClick={async()=>{await logout()}}>
          <RiLogoutCircleRLine className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default LeftNav;
