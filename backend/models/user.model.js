import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    projects: { type: [String], default: [] },
    role: {
      type: [String],
      enum: ["admin", "manager", "user"],
      default: ["user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
