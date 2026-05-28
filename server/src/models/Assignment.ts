import mongoose from "mongoose";

const assignmentSchema =
  new mongoose.Schema(

    {
      title: String,

      subject: String,

      generatedContent: Object,
    },

    {
      timestamps: true,
    }
  );

export const Assignment =
  mongoose.model(
    "Assignment",
    assignmentSchema
  );