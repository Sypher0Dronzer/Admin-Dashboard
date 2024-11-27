import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignUp";
import AuthImagePattern from "../components/AuthImagePattern";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <>
     
      <div className="grid lg:grid-cols-2 sm:h-screen h-[100svh] font-light">
        <div className=" mx-auto flex items-center  text-base-300-content max-w-[90vw]">
          <div className="sm:w-[max(24vw,320px)] min-w-md">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center">
              Sign Up{" "}
              
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full input input-bordered  h-10"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label p-2 ">
                  <span className="text-base label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="johndoe"
                  className="w-full input input-bordered h-10"
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
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
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>

              <p
                to={"/login"}
                className="text-sm my-4 text-center"
                href="#"
              >
                Already have an account?<Link to='/login' className="link text-primary">{" "}Login</Link>
              </p>

              <div>
                <button className="btn btn-block  btn-sm  btn-primary ">
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <AuthImagePattern
          title="Join Us"
          subtitle="Great to have you Aboard!"
        ></AuthImagePattern>
      </div>
    </>
  );
};
export default SignUp;
