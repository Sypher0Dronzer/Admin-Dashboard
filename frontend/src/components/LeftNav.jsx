import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "./../../public/logo.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";

const LeftNav = () => {
  const navigate = useNavigate();
  

  return (
    <div className="fixed h-screen z-10 top-0  bg-base-100 flex flex-col items-center gap-y-8 px-2 py-4 border-l-0 border-[1px] border-y-0 justify-between">
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
        <button
          onClick={navigate("/settings")}
          className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary"
        >
          <IoSettingsOutline className="size-6" />
        </button>
      </ul>
      <div className="flex flex-col gap-y-4">
      <button
          onClick={navigate("/settings")}
          className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary"
        >
      <PiPaintBrushBroadDuotone className="size-6" />
        </button>
      <button
          onClick={navigate("/settings")}
          className="btn btn-square btn-ghost hover:text-primary-content text-primary hover:bg-primary"
        >
      <RiLogoutCircleRLine className="size-6" />
        </button>
        
      </div>
    </div>
  );
};

export default LeftNav;
