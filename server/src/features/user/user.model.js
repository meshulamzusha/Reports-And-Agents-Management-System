import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    agentCode: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "agent"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

export default User;
