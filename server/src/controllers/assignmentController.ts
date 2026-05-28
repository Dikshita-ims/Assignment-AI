import { Request, Response }
from "express";

import { assignmentQueue }
from "../queues/assignmentQueue";

export const generateAssignment =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const job =
        await assignmentQueue.add(
          "generate-assignment",

          req.body
        );

      res.status(200).json({

        success: true,

        message:
          "Assignment generation started",

        jobId: job.id,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to generate assignment",
      });
    }
  };