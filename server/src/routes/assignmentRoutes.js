"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignmentController_1 = require("../controllers/assignmentController");
const getAssignmentController_1 = require("../controllers/getAssignmentController");
const router = express_1.default.Router();
router.post("/generate", assignmentController_1.generateAssignment);
router.get("/:id", getAssignmentController_1.getAssignmentById);
exports.default = router;
//# sourceMappingURL=assignmentRoutes.js.map