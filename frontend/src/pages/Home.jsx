import Navbar from "../components/Navbar";
import LeftNav from "../components/LeftNav";
import { FaFaceLaughBeam } from "react-icons/fa6";
import { useAuthStore } from "../zustand/useAuthStore";
import { useEffect, useState } from "react";
import { useProjects } from "../zustand/useProjects";
import { useUsers } from "../zustand/useUsers";
import MobileNav from "../components/MobileNav";

const Home = () => {
  const roleAccessability = {
    manager: [
      "Have access the Permission Requests page.",
      "Have access  the User Management page.",
      "Hold the power to promote or demote any user.",
      "Can add members to a project",
      "Can create new projects",
    ],

    admin: [
      "Have access  the User Management page.",
      "Holds the power to promote or demote a contributor.",
      "Can add members to a project",
      "Can create new projects",
    ],
    contributor: [
      "Don't have access the Permission Requests and the User Management pages.",
      "Cannot add members to a project",
      "Unable create new projects",
    ],
  };

  const { projects } = useProjects();
  const [ongoingCount, setOngoingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [ongoingPercentage, setOngoingPercentage] = useState(0);
  const [completedPercentage, setCompletedPercentage] = useState(0);

  useEffect(() => {
    const totalProjects = projects.length;

    // Calculate counts
    const ongoing = projects.filter(
      (project) => project.status === "ongoing"
    ).length;
    const completed = projects.filter(
      (project) => project.status === "completed"
    ).length;

    setOngoingCount(ongoing);
    setCompletedCount(completed);

    // Calculate percentage
    let percentage = totalProjects > 0 ? (ongoing / totalProjects) * 100 : 0;
    setOngoingPercentage(percentage.toFixed(2)); // Limit to 2 decimal places

    percentage = totalProjects > 0 ? (completed / totalProjects) * 100 : 0;
    setCompletedPercentage(percentage.toFixed(2)); // Limit to 2 decimal places
  }, [projects]);

  const { user, onlineUsers, isLoading } = useAuthStore();
  const { allUsers } = useUsers();

  const [activePercentage, setActivePercentage] = useState(0);
  const [inactivePercentage, setInactivePercentage] = useState(0);

  useEffect(() => {
    const totalUsers = allUsers.length;

    if (totalUsers > 0) {
      const activeCount = onlineUsers.length;
      const inactiveCount = totalUsers - activeCount;

      const activePercent = (activeCount / totalUsers) * 100;
      const inactivePercent = (inactiveCount / totalUsers) * 100;

      setActivePercentage(activePercent.toFixed(2)); // Limit to 2 decimals
      setInactivePercentage(inactivePercent.toFixed(2));
    }
  }, [allUsers, onlineUsers]);

  if (isLoading) {
    return (
      <div className="h-screen bg-base-300 flex items-center justify-center">
        <span className="loading loading-bars text-accent loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="bg-base-300 p-6 lg:pl-24 pt-24 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-base-200 ">
      <LeftNav />
      <Navbar />
      <MobileNav></MobileNav>

      <h1 className="font-medium text-2xl ">Dashboard</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 mx-auto">
        {/* -----------------personal details--------- */}
        <div
          className="card px-4 py-6 sm:p-8 bg-base-100
        shadow-primary shadow-sm
        "
        >
          <div className="flex flex-col sm:flex-row items-center sm:gap-x-8 gap-4 xl:gap-x-4">
            <div className="avatar">
              <div className="lg:w-20 w-28 rounded-full">
                <img src={user.profileImg} />
              </div>
            </div>

            <div className="flex flex-col justify-center ">
              <div className="flex gap-x-2 items-center text-lg ">
                <h1 className="inline">Welcome, {user.name}</h1>
                {/* <span className="bg-black">
                  <FaFaceLaughBeam className=" text-secondary" />
                  </span> */}
              </div>
              <p className="my-1 text-sm font-light sm:text-start text-center">
                {user.email}
              </p>
            </div>
          </div>
          <p className="sm:mt-2 sm:text-start text-center">
            Role:{" "}
            <span className="text-primary">
              {user && user.role.slice(0, 1).toUpperCase() + user.role.slice(1)}
            </span>
          </p>
          <ul className="mt-2">
            <h2 className="font-medium text-md mb-2">
              Role-Based Feature Access
            </h2>
            {roleAccessability[user.role].map((feature, index) => (
              <li
                key={index}
                className="list-disc list-inside text-sm text-base-content/70"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {/* ------------------Project details----------- */}
        <div
          className="card p-8 bg-base-100
        shadow-primary shadow-sm
        "
        >
          <h1 className="text-lg md:text-start text-center font-semibold">
            Projects Status
          </h1>
          <div className="flex justify-around mt-6 gap-4">
            <div className="card bg-base-00  flex flex-col gap-y-6 items-center">
              <div
                className="radial-progress bg-base-300 text-secondary border-primary"
                style={{ "--value": ongoingPercentage, "--size": "9rem" }}
                role="progressbar"
              >
                {ongoingPercentage}
              </div>
              <p className="text-secondary tracking-wide">Ongoing</p>
            </div>
            <div className="card bg-base-00  flex flex-col gap-y-6 items-center">
              <div
                className="radial-progress bg-base-300 text-primary border-primary "
                style={{ "--value": completedPercentage, "--size": "9rem" }}
                role="progressbar"
              >
                {completedPercentage}
              </div>
              <p className="text-primary tracking-wide">Completed</p>
            </div>
          </div>
        </div>
        {/* -----------------------user details -------------------- */}
        <div
          className="card p-6 sm:p-8 bg-base-100
        shadow-primary shadow-sm
        "
        >
          <h1 className="text-lg md:text-start text-center font-semibold">
            Users Status
          </h1>
          <div className="flex justify-around mt-6 gap-4">
            <div className="card bg-base-00  flex flex-col gap-y-6 items-center">
              <div
                className="radial-progress bg-base-300 text-success border-primary"
                style={{ "--value": activePercentage, "--size": "9rem" }}
                role="progressbar"
              >
                {activePercentage}
              </div>
              <p className="text-success tracking-wide">Active</p>
            </div>
            <div className="card bg-base-00  flex flex-col gap-y-6 items-center">
              <div
                className="radial-progress bg-base-300 text-error border-primary "
                style={{ "--value": inactivePercentage, "--size": "9rem" }}
                role="progressbar"
              >
                {inactivePercentage}
              </div>
              <p className="text-error tracking-wide">Inactive</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-xl font-medium mt-8 mb-6">
        Role-Based Feature Access
      </h1>
      {/* -----------------Role Based Features-------------- */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {Object.entries(roleAccessability).map(([role, features]) => (
          <div
            key={role}
            className="card p-8 bg-base-100
        shadow-primary shadow-sm"
          >
            <h2 className="text-lg font-semibold capitalize mb-2">
              {role} Role
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>
                  <p className="text-sm">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
