import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignUp";

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
      {/* <div className="mx-auto  p-0.5 background-animate card bg-gradient-to-r from-primary via-base-content to-accent"> */}
      <div className="flex h-screen w-screen items-center">
        <div className="sm:min-w-96 mx-auto card bg-base-300 text-base-300-content">
          <div className="w-full p-6">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center">
              Sign Up{" "}
              {/* <span className="bg-gradient-to-r background-animate from-primary via-base-content to-accent bg-clip-text text-transparent font-bold sm:text-4xl text-3xl brightness-150">
                {" "}
                Sora
              </span> */}
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

              <Link
                to={"/login"}
                className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
                href="#"
              >
                Already have an account?
              </Link>

              <div>
                <button className="btn btn-block btn-outline btn-sm mt-2 btn-primary ">
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
      </div>
    </>
  );
};
export default SignUp;
