import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import AuthImagePattern from "../components/AuthImagePattern";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });

  };
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:h-screen h-[100svh] font-light">
        <div className=" mx-auto flex items-center  text-base-300-content max-w-[90vw]">
          <div className="sm:w-[max(24vw,320px)] ">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center ">
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

              <p
                to="/signup"
                className="text-sm mt-4 text-center"
              >
                {"Don't "}have an account yet ? <Link to='/signup' className="text-primary link"> Create an account</Link>
              </p>

              <div>
                <button
                  className="btn btn-primary text-primary-content btn-block btn-sm mt-4"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner "></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>

              <div>
                
              </div>
            </form>
          </div>
        </div>
        <AuthImagePattern
          title="Welcome back"
          subtitle="Sign in to get back to Work!"
        ></AuthImagePattern>
      </div>
    </>
  );
};
export default Login;
