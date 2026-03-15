import mongoose from "mongoose";

const { Schema } = mongoose;

const reportSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["intelligence", "logistics", "alert"],
    },

    urgency: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },

    message: {
      type: String,
      required: true,
    },

    imagePath: {
      type: String,
      default: null,
    },

    sourceType: {
      type: String,
      required: true,
      enum: ["form", "csv"],
    },
  },
  { timestamps: true },
);

export const Report = mongoose.model("Report", reportSchema);
