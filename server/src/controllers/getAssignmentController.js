"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssignmentById = void 0;
const Assignment_1 = require("../models/Assignment");
const getAssignmentById = async (req, res) => {
    try {
        const assignment = await Assignment_1.Assignment.findById(req.params.id);
        if (!assignment) {
            return res.status(404).json({
                success: false,
                message: "Assignment not found",
            });
        }
        res.status(200).json({
            success: true,
            assignment,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch assignment",
        });
    }
};
exports.getAssignmentById = getAssignmentById;
//# sourceMappingURL=getAssignmentController.js.map