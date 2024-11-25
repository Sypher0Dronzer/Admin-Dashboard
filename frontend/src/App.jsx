
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

export default function App() {
  const {user}= useAuthStore()
  return (
    <div className="font-poppins max-w-[100vw] overflow-hidden">
      <Routes>
      <Route index element={user?<Home />: <Navigate to={'/login'}/>} />
        <Route path="/signup" element={!user?<SignUp />:<Navigate to={'/'}/>} />
        <Route path="/login" element={!user?<Login />:<Navigate to={'/'}/>} />
        <Route path="/projects" element={user?<ProjectManagement />: <Navigate to={'/login'}/>} />
        <Route path="/users" element={user?<UsersManagement />: <Navigate to={'/login'}/>} />
        <Route path="/permissions" element={user?<PermissionsManagement />: <Navigate to={'/login'}/>} />
        <Route path="/settings" element={user?<Settings />: <Navigate to={'/login'}/>} />
      </Routes>
      <Toaster />
    </div>
  );
}

{/* <Route path="/login" element={!user? <LoginPage /> : <Navigate to={'/'}/>} />
          <Route path="/signup" element={!user? <SignUpPage /> : <Navigate to={'/'}/>} />
          <Route path="/search" element={user? <SearchPage /> : <Navigate to={'/login'}/>} />
          <Route path="/history" element={user? <SearchHistoryPage /> : <Navigate to={'/login'}/>} />
          <Route path="/watch/:type/:id" element={user? <WatchPage /> : <Navigate to={'/login'}/>} />
          <Route path="/cast/:id" element={user? <CastDetailPage /> : <Navigate to={'/login'}/>} />
          <Route path='/*' element={<NotFoundPage />} /> */}
