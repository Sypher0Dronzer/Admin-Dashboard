import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({email, password});
  };
  return (
    <>
    {/* <div className="mx-auto p-0.5 items-center bg-gradient-to-r from-primary via-base-content to-accent "> */}
    <div className="flex h-screen w-screen items-center">
    
    <div className="sm:max-w-96 w-[70vw] mx-auto card bg-base-300 text-base-300-content relative">
    
      <div className="w-full p-6 sm:py-8 ">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center ">
          {/* <span className="bg-gradient-to-r from-primary via-base-content   to-accent bg-clip-text text-transparent font-bold sm:text-4xl text-3xl relative ">Dashboard{" "}
          <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 bg-gradient-to-r from-primary via-base-content to-accent bg-clip-text text-transparent font-bold sm:text-4xl text-3xl brightness-125 blur-md">Dashboard</span>
          </span> */}
          Login
         
         
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full input 
						input-bordered h-10"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-primary mt-2 inline-block"
          >
            {"Don't "}have an account yet ?
          </Link>

          <div>
		  <button className='btn btn-primary text-primary-content btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
          </div>

          <div>
            <Link to='/signup'>
            <button className="btn btn-primary text-primary-content  btn-outline btn-block btn-sm mt-2 ">
              Sign Up
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};
export default Login;
