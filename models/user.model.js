import mongoose, { Schema } from "mongoose";

// create monggose schema
const userSchema = new Schema(
  {
    name: { type: String, maxLength: 20, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true,
  }
);

// create model
const User = mongoose.model("User", userSchema);

export default User;
