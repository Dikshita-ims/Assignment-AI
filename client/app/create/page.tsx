"use client";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/Navbar";
import QuestionTypeRow from "@/components/forms/QuestionTypeRow";
import { useState } from "react";
import { useAssignmentStore } from "@/store/assignmentStore";
import axios from "axios";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  assignmentSchema,
  AssignmentFormData,
} from "@/lib/validation";
import { useRouter } from "next/navigation";

export default function CreateAssignmentPage() {

  const {
    questionRows,
    addQuestionRow,
    removeQuestionRow,
  } = useAssignmentStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignmentFormData>({
    resolver: zodResolver(assignmentSchema),
  });
 const router = useRouter();
 const [loading, setLoading] = useState(false);
 const onSubmit = async (data: AssignmentFormData) => {

  try {

    setLoading(true);

    const payload = {
      ...data,
      questionRows,
    };

    const response = await axios.post(
      "http://localhost:5000/api/assignments/generate",
      payload
    );

    console.log(response.data);

    router.push("/generation");

  } catch (error) {

    console.log(error);

    alert("Failed to generate assignment");

  } finally {

    setLoading(false);
  }
};

  return (
    <main className="flex bg-[#f5f5f5] min-h-screen">

      <Sidebar />

      <section className="flex-1 p-6">

        <Navbar />

        <div className="mt-6 bg-white rounded-3xl p-10 shadow-sm">

          <div className="mb-10">

            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Create Assignment
            </h1>

            <p className="text-gray-700">
              Generate AI-powered assessment papers
            </p>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            <div>

              <label className="block text-sm font-semibold mb-3">
                Assignment Title
              </label>

              <input
                type="text"
                placeholder="Enter assignment title"
                {...register("title")}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-sm"
              />

              {errors.title && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.title.message}
                </p>
              )}

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-semibold mb-3">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  {...register("subject")}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-sm"
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.subject.message}
                  </p>
                )}

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3">
                  Due Date
                </label>

                <input
                  type="date"
                  {...register("dueDate")}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-sm"
                />

                {errors.dueDate && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.dueDate.message}
                  </p>
                )}

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-4">

                <label className="block text-sm font-semibold">
                  Question Configuration
                </label>

                <button
                  type="button"
                  onClick={addQuestionRow}
                  className="text-sm bg-gray-100 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-all"
                >
                  + Add Row
                </button>

              </div>

              <div className="space-y-4">

                {questionRows.map((row) => (
                  <QuestionTypeRow
                    key={row.id}
                    id={row.id}
                    type={row.type}
                    questions={row.questions}
                    marks={row.marks}
                    onRemove={removeQuestionRow}
                  />
                ))}

              </div>

            </div>

            <div>

              <label className="block text-sm font-semibold mb-3">
                Additional Instructions
              </label>

              <textarea
                rows={5}
                placeholder="Add instructions for AI generation..."
                {...register("instructions")}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-sm resize-none"
              />

              {errors.instructions && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.instructions.message}
                </p>
              )}

            </div>

            <div>

              <label className="block text-sm font-semibold mb-3">
                Upload Reference Material
              </label>

              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center">

                <p className="text-gray-700 mb-3">
                  Drag & drop files here
                </p>

                <button
                  type="button"
                  className="bg-gray-100 px-5 py-3 rounded-full text-sm font-medium"
                >
                  Browse Files
                </button>

              </div>

            </div>

            <div className="flex justify-end">

              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all"
              >
                {loading ? "Generating..." : "Generate Assignment"}
              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}