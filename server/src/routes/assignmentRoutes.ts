import express from "express";

import {
  generateAssignment
} from "../controllers/assignmentController";

import {
  getAssignmentById
} from "../controllers/getAssignmentController";

const router = express.Router();

router.post(
  "/generate",
  generateAssignment
);

router.get(
  "/:id",
  getAssignmentById
);

export default router;