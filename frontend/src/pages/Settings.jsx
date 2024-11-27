import LeftNav from "../components/LeftNav";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Settings = () => {
  return (
    <div className="bg-base-300 p-6 lg:pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
      <LeftNav />
      <Navbar />
      <MobileNav/>

        <h1 className="text-lg font-bold mb-4 text-primary">Themes To Choose From</h1>
     { <ThemeSwitcher position=' dropdown-down' 
    //  visibility={`${user?.success?"hidden": 'hidden sm:inline-block'}`} 
     />} 
    </div>
  )
}

export default Settings
