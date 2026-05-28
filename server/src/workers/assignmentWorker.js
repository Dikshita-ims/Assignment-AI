"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const socketServer_1 = require("../socket/socketServer");
const generateQuestions_1 = require("../utils/generateQuestions");
const Assignment_1 = require("../models/Assignment");
const worker = new bullmq_1.Worker("assignment-generation", async (job) => {
    console.log("=================================");
    console.log("Processing Assignment Job");
    console.log("Job ID:", job.id);
    console.log("Job Data:", job.data);
    console.log("Generating AI Questions...");
    const io = (0, socketServer_1.getIO)();
    io.emit("generation-update", {
        status: "processing",
        message: "Generating AI Questions...",
    });
    const generatedQuestions = await (0, generateQuestions_1.generateQuestions)(job.data);
    console.log(generatedQuestions);
    const parsedQuestions = JSON.parse(generatedQuestions);
    const savedAssignment = await Assignment_1.Assignment.create({
        title: job.data.title,
        subject: job.data.subject,
        generatedContent: parsedQuestions,
    });
    console.log("Assignment Generated Successfully");
    io.emit("generation-update", {
        status: "completed",
        message: "Assignment Generated Successfully",
        assignmentId: savedAssignment._id.toString(),
    });
    console.log("=================================");
    return {
        success: true,
        generatedQuestions,
        generatedAt: new Date(),
    };
}, {
    connection: {
        url: process.env.REDIS_URL,
    },
});
worker.on("completed", (job) => {
    console.log(`Job ${job.id} completed`);
});
worker.on("failed", (job, err) => {
    console.log(`Job ${job?.id} failed`);
    console.log(err);
});
//# sourceMappingURL=assignmentWorker.js.map