import PermissionsManagement from "../pages/PermissionsManagement";
import ProjectManagement from "../pages/ProjectManagement";
import UsersManagement from "../pages/UsersManagement";
import Settings from "../pages/Settings";
import { useTabSelection } from "../zustand/useTabSelection";
import { Navigate,useNavigate, Route, Routes } from "react-router-dom";

const MainContent = () => {
  const {selectedTab} =useTabSelection()
  const navigate = useNavigate();
  navigate(selectedTab)
  return (
    // <div className="bg-base-300 p-6 mt-16 ml-16 h-screen">
    <div className="bg-base-300 p-6 pl-24 pt-24 h-screen overflow-auto">
      <Routes>
        <Route path="/projects" element={<ProjectManagement />} />
        <Route path="/users" element={<UsersManagement />} />
        <Route path="/permissions" element={<PermissionsManagement />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      
    </div>
  );
};

export default MainContent;