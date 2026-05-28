"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/Navbar";
import jsPDF from "jspdf";

import html2canvas from "html2canvas";
export default function OutputPage() {
const downloadPDF = async () => {

  const input =
    document.getElementById(
      "assignment-paper"
    );

  if (!input) return;

  const canvas =
    await html2canvas(input);

  const imgData =
    canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  const pdfWidth =
    pdf.internal.pageSize.getWidth();

  const pdfHeight =
    (canvas.height * pdfWidth) /
    canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pdfWidth,
    pdfHeight
  );

  pdf.save(
    `${generatedContent.title}.pdf`
  );
};
  const [assignment, setAssignment] =
    useState<any>(null);

  useEffect(() => {

    const fetchAssignment = async () => {

      try {

        const assignmentId =
          localStorage.getItem(
            "assignmentId"
          );

        const response = await axios.get(
          `http://localhost:5000/api/assignments/${assignmentId}`
        );

        setAssignment(
          response.data.assignment
        );

      } catch (error) {

        console.log(error);
      }
    };

    fetchAssignment();

  }, []);

  if (!assignment) {

  return (

    <main className="h-screen bg-[#f5f5f5] flex items-center justify-center">

      <div className="bg-white rounded-3xl p-12 shadow-sm text-center max-w-lg">

        <div className="w-20 h-20 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-8" />

        <h1 className="text-3xl font-bold mb-4">

          Preparing Assignment

        </h1>

        <p className="text-gray-600 text-lg">

          Fetching generated assessment
          from the server...

        </p>

      </div>

    </main>
  );
}

  const generatedContent =
    assignment.generatedContent;
const totalMarks = generatedContent.sections.reduce(

    (acc: number, section: any) =>

      acc +
      section.questions.reduce(

        (sum: number, question: any) =>

          sum + question.marks,

        0
      ),

    0
  );
  if (!generatedContent) {

  return (

    <main className="h-screen bg-[#f5f5f5] flex items-center justify-center">

      <div className="bg-white rounded-3xl p-12 shadow-sm text-center max-w-lg">

        <h1 className="text-3xl font-bold mb-4">

          No Assignment Found

        </h1>

        <p className="text-gray-600 text-lg">

          The generated assessment
          could not be loaded.

        </p>

      </div>

    </main>
  );
}

  return (
    <main className="flex bg-[#f5f5f5] min-h-screen">

      <Sidebar />

      <section className="flex-1 p-6">

        <Navbar />

        <div className="mt-6 bg-white rounded-3xl p-10 shadow-sm">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">
  {generatedContent.title}
</h1>

<p className="text-gray-700">
  AI Generated Assessment
</p>

<p className="text-gray-700 mt-2">

  Subject:
  <span className="font-semibold">
    {" "}
    {assignment.subject}
  </span>

</p>

<p className="text-sm text-gray-500 mt-2">

  Total Marks: {totalMarks}

</p>

            </div>

            <button
  onClick={downloadPDF}
  className="bg-black text-white px-5 py-3 rounded-full hover:opacity-90 transition-all"
>
              Download PDF
            </button>

          </div>

          <div
  id="assignment-paper"
  className="border border-gray-200 rounded-3xl p-10 bg-white"
>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Student Name
                </label>

                <div className="border-b border-gray-400 h-10" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Roll Number
                </label>

                <div className="border-b border-gray-400 h-10" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Section
                </label>

                <div className="border-b border-gray-400 h-10" />
              </div>

            </div>

            <div className="space-y-12">

              {generatedContent.sections.map(
                (section: any, index: number) => (

                  <div key={index}>

                    <div className="mb-6">

                      <h2 className="text-2xl font-bold mb-2">
                        {section.title}
                      </h2>

                      <p className="text-gray-700">
                        {section.instruction}
                      </p>

                    </div>

                    <div className="space-y-6">

                      {section.questions.map(
                        (
                          question: any,
                          qIndex: number
                        ) => (

                          <div
                            key={qIndex}
                            className="border border-gray-200 rounded-2xl p-6"
                          >

                            <div className="flex items-start justify-between gap-6">

                              <p className="text-lg font-medium text-gray-900 leading-relaxed">

                                {qIndex + 1}.{" "}
                                {question.question}

                              </p>

                              <div className="flex items-center gap-3 shrink-0">

                                <span
                                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                                        question.difficulty === "Easy"
                                          ? "bg-green-100 text-green-700"

                                          : question.difficulty === "Medium"
                                          ? "bg-yellow-100 text-yellow-700"

                                          : "bg-red-100 text-red-700"
                                       }`}
                                >

  {question.difficulty}

</span>

                                <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-medium">
                                  {question.marks} Marks
                                </span>

                              </div>

                            </div>

                          </div>
                        )
                      )}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}