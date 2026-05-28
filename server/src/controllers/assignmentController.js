"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAssignment = void 0;
const assignmentQueue_1 = require("../queues/assignmentQueue");
const generateAssignment = async (req, res) => {
    try {
        const job = await assignmentQueue_1.assignmentQueue.add("generate-assignment", req.body);
        res.status(200).json({
            success: true,
            message: "Assignment generation started",
            jobId: job.id,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to generate assignment",
        });
    }
};
exports.generateAssignment = generateAssignment;
//# sourceMappingURL=assignmentController.js.map