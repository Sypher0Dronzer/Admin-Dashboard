
import {  Navigate, Route, Routes } from "react-router-dom";
import ProjectManagement from "./pages/ProjectManagement";
import UsersManagement from "./pages/UsersManagement";
import PermissionsManagement from "./pages/PermissionsManagement";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./zustand/useAuthStore";
import Home from "./pages/Home";
import { useEffect } from "react";
import UnauthorisedPage from "./pages/UnauthorisedPage";
import PageNotFound from "./pages/PageNotFound";
import CreatePermissionForm from "./pages/CreatePermissionForm";

export default function App() {
  const {user,authCheck,isLoading,userRole}=useAuthStore()
  useEffect(()=>{
    authCheck();
   
  },[])
  if(isLoading) return (
    <div className="h-[100dvh] flex items-center justify-center">
      <span className="loading loading-spinner loading-lg text-white"></span>
    </div>
  )
  return (
    <div className="font-poppins max-w-[100vw] overflow-hidden">
      <Routes>
        <Route index element={user?<Home />: <Navigate to={'/login'}/>} />
        <Route path="/signup" element={!user?<SignUp />:<Navigate to={'/'}/>} />
        <Route path="/login" element={!user?<Login />:<Navigate to={'/'}/>} />
        <Route path="/projects" element={user?<ProjectManagement />: <Navigate to={'/login'}/>} />

        {(user && (userRole=='manager'|| userRole=='admin'))?
        <Route path="/users" element={user?<UsersManagement />: <Navigate to={'/login'}/>} /> :
        <Route path="/users" element={user?<UnauthorisedPage onlyManager={false} />: <Navigate to={'/login'}/>} />
        }


        <Route path="/requestpermission" element={user?<CreatePermissionForm />: <Navigate to={'/login'}/>} />  

        
         {(user && (userRole=='manager'))?
         <Route path="/permissions" element={user?<PermissionsManagement />: <Navigate to={'/login'}/>} /> :
        <Route path="/permissions" element={user?<UnauthorisedPage onlyManager={true} />: <Navigate to={'/login'}/>} />
        }
        
        <Route path="/settings" element={user?<Settings />: <Navigate to={'/login'}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

