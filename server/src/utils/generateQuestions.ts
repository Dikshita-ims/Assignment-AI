import dotenv from "dotenv";

dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || ""
);

export const generateQuestions = async (
  data: any
) => {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
You are an AI teacher.

Generate a professional assessment paper.

Subject:
${data.subject}

Assignment Title:
${data.title}

Instructions:
${data.instructions}

Question Configuration:
${JSON.stringify(data.questionRows)}

Rules:
- Create sections
- Add questions
- Add marks
- Add difficulty
- Return ONLY valid JSON
- No markdown
- No explanation

Format:
{
  "title": "",
  "sections": [
    {
      "title": "",
      "instruction": "",
      "questions": [
        {
          "question": "",
          "difficulty": "",
          "marks": 0
        }
      ]
    }
  ]
}
`;

    const result =
      await model.generateContent(prompt);

    const response =
      result.response.text();

    return response;

  } catch (error) {

    console.log(
      "Gemini Failed → Using Mock Data"
    );

    const subject =
      data.subject.toLowerCase();

    // MATHS FALLBACK

    if (
      subject.includes("math")
    ) {

      return JSON.stringify({

        title: data.title,

        sections: [

          {
            title: "Section A",

            instruction:
              "Attempt all questions",

            questions: [

              {
                question:
                  "Find the value of 24 × 7.",

                difficulty: "Easy",

                marks: 2,
              },

              {
                question:
                  "Solve: 81 ÷ 9",

                difficulty: "Easy",

                marks: 2,
              },
            ],
          },

          {
            title: "Section B",

            instruction:
              "Answer any two questions",

            questions: [

              {
                question:
                  "Explain the Pythagoras theorem.",

                difficulty: "Medium",

                marks: 5,
              },

              {
                question:
                  "Solve x² - 6x + 9 = 0",

                difficulty: "Hard",

                marks: 10,
              },
            ],
          },
        ],
      });
    }

    // ENGLISH FALLBACK

    if (
      subject.includes("english")
    ) {

      return JSON.stringify({

        title: data.title,

        sections: [

          {
            title: "Section A",

            instruction:
              "Attempt all questions",

            questions: [

              {
                question:
                  "Define noun with an example.",

                difficulty: "Easy",

                marks: 2,
              },

              {
                question:
                  "What is an adjective?",

                difficulty: "Easy",

                marks: 2,
              },
            ],
          },

          {
            title: "Section B",

            instruction:
              "Answer any two questions",

            questions: [

              {
                question:
                  "Write a short essay on teamwork.",

                difficulty: "Medium",

                marks: 5,
              },

              {
                question:
                  "Explain the importance of communication skills.",

                difficulty: "Hard",

                marks: 10,
              },
            ],
          },
        ],
      });
    }

    // PHYSICS FALLBACK

    if (
      subject.includes("physics")
    ) {

      return JSON.stringify({

        title: data.title,

        sections: [

          {
            title: "Section A",

            instruction:
              "Attempt all questions",

            questions: [

              {
                question:
                  "Define force.",

                difficulty: "Easy",

                marks: 2,
              },

              {
                question:
                  "State Newton's First Law.",

                difficulty: "Easy",

                marks: 2,
              },
            ],
          },

          {
            title: "Section B",

            instruction:
              "Answer any two questions",

            questions: [

              {
                question:
                  "Explain Ohm's Law.",

                difficulty: "Medium",

                marks: 5,
              },

              {
                question:
                  "Derive the equation of motion.",

                difficulty: "Hard",

                marks: 10,
              },
            ],
          },
        ],
      });
    }

    // GENERIC FALLBACK

    return JSON.stringify({

      title: data.title,

      sections: [

        {
          title: "Section A",

          instruction:
            "Attempt all questions",

          questions: [

            {
              question:
                "Define the core concept of the subject.",

              difficulty: "Easy",

              marks: 2,
            },

            {
              question:
                "Explain one practical application of the subject.",

              difficulty: "Medium",

              marks: 5,
            },
          ],
        },
      ],
    });
  }
};