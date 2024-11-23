import ThemeSwitcher from "../components/ThemeSwitcher";

const Settings = () => {
  return (
    <div>
        <h1 className="text-lg font-bold mb-4 text-primary">Themes To Choose From</h1>
     { <ThemeSwitcher position=' dropdown-down' 
    //  visibility={`${user?.success?"hidden": 'hidden sm:inline-block'}`} 
     />} 
    </div>
  )
}

export default Settings
