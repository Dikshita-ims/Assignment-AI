import { Request, Response }
from "express";

import { Assignment }
from "../models/Assignment";

export const getAssignmentById =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const assignment =
        await Assignment.findById(
          req.params.id
        );

      if (!assignment) {

        return res.status(404).json({

          success: false,

          message:
            "Assignment not found",
        });
      }

      res.status(200).json({

        success: true,

        assignment,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Failed to fetch assignment",
      });
    }
  };