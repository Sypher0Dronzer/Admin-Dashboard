import { useState } from "react";
import toast from "react-hot-toast";
import { useUsers } from "../zustand/useUsers";

const CreateNewUser = () => {
  const { createUser } = useUsers();
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = inputs;

    if (!email || !name || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    console.log("New User Data:", inputs);
    createUser(inputs);

    setInputs({ email: "", name: "", password: "" });
  };

  return (
    <form className="space-y-4 p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-4">Create New User</h2>

      {/* Email Input */}
      <div className="form-control w-full mb-4">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          className="input input-bordered input-md w-full"
          placeholder="john@gmail.com"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </div>

      {/* Name Input */}
      <div className="form-control w-full mb-4">
        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          id="name"
          type="text"
          className="input input-bordered input-md w-full"
          placeholder="John Doe"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
      </div>

      {/* Password Input */}
      <div className="form-control w-full mb-4">
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          className="input input-bordered input-md w-full"
          placeholder="Enter Password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full">
        Create User
      </button>
    </form>
  );
};

export default CreateNewUser;
