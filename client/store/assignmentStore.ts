import { create } from "zustand";

type QuestionRow = {
  id: number;
  type: string;
  questions: number;
  marks: number;
};

type AssignmentStore = {
  questionRows: QuestionRow[];

  addQuestionRow: () => void;

  removeQuestionRow: (id: number) => void;
};

export const useAssignmentStore = create<AssignmentStore>((set) => ({
  questionRows: [
    {
      id: 1,
      type: "Multiple Choice",
      questions: 5,
      marks: 2,
    },
  ],

  addQuestionRow: () =>
    set((state) => ({
      questionRows: [
        ...state.questionRows,
        {
          id: Date.now(),
          type: "Short Answer",
          questions: 1,
          marks: 1,
        },
      ],
    })),

  removeQuestionRow: (id) =>
    set((state) => ({
      questionRows: state.questionRows.filter(
        (row) => row.id !== id
      ),
    })),
}));