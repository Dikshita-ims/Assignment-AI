import { Worker } from "bullmq";

import { getIO } from "../socket/socketServer";

import { redisConnection } from "../config/redis";

import { generateQuestions } from "../utils/generateQuestions";

import { Assignment } from "../models/Assignment";

const worker = new Worker(

  "assignment-generation",

  async (job) => {

    console.log("=================================");

    console.log("Processing Assignment Job");

    console.log("Job ID:", job.id);

    console.log("Job Data:", job.data);

    console.log("Generating AI Questions...");

    const io = getIO();

    io.emit("generation-update", {
      status: "processing",

      message:
        "Generating AI Questions...",
    });

    const generatedQuestions =
      await generateQuestions(job.data);

    console.log(generatedQuestions);

    const parsedQuestions = JSON.parse(
      generatedQuestions
    );

    const savedAssignment =
      await Assignment.create({

        title: job.data.title,

        subject: job.data.subject,

        generatedContent:
          parsedQuestions,
      });

    console.log(
      "Assignment Generated Successfully"
    );

    io.emit("generation-update", {
      status: "completed",

      message:
        "Assignment Generated Successfully",

      assignmentId:
        savedAssignment._id.toString(),
    });

    console.log("=================================");

    return {

      success: true,

      generatedQuestions,

      generatedAt: new Date(),
    };
  },

  {
   connection: {
  url: process.env.REDIS_URL,
},
  }
);

worker.on("completed", (job) => {

  console.log(
    `Job ${job.id} completed`
  );
});

worker.on("failed", (job, err) => {

  console.log(
    `Job ${job?.id} failed`
  );

  console.log(err);
});