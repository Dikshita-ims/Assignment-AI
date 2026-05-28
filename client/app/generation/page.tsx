"use client";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/Navbar";

import { useEffect, useState } from "react";

import { socket } from "@/lib/socket";

export default function GenerationPage() {

  const [liveMessage, setLiveMessage] =
    useState("Starting AI generation...");

  const steps = [
    {
      text: "Analyzing assignment requirements...",
      status: "completed",
    },

    {
      text: "Generating question structure...",
      status: "completed",
    },

    {
      text: "Balancing difficulty levels...",
      status: "active",
    },

    {
      text: "Creating assessment sections...",
      status: "pending",
    },

    {
      text: "Finalizing question paper...",
      status: "pending",
    },
  ];

  useEffect(() => {

    socket.on("generation-update", (data) => {

      console.log(data);

      setLiveMessage(data.message);

      if (data.status === "completed") {

        console.log(
          "ASSIGNMENT ID:",
          data.assignmentId
        );

        localStorage.setItem(
          "assignmentId",
          data.assignmentId
        );

        setTimeout(() => {

          window.location.href =
            "/output";

        }, 2000);
      }
    });

    return () => {
      socket.off("generation-update");
    };

  }, []);

  return (

    <main className="flex bg-[#f5f5f5] min-h-screen">

      <Sidebar />

      <section className="flex-1 p-6">

        <Navbar />

        <div className="mt-6 bg-white rounded-3xl h-[85vh] shadow-sm flex flex-col items-center justify-center text-center px-10">

          <div className="w-24 h-24 border-4 border-black border-t-transparent rounded-full animate-spin mb-10" />

          <h1 className="text-4xl font-bold mb-4">

            Generating Assignment

          </h1>

          <p className="text-gray-700 text-lg mb-10">

            {liveMessage}

          </p>

          <div className="space-y-4 w-full max-w-xl">

            {steps.map((step, index) => (

              <div
                key={index}
                className={`rounded-2xl px-5 py-4 text-left transition-all ${
                  step.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : step.status === "active"
                    ? "bg-yellow-100 text-yellow-800 animate-pulse"
                    : "bg-gray-100 text-gray-500"
                }`}
              >

                {step.status === "completed"
                  ? "✓"
                  : step.status === "active"
                  ? "⏳"
                  : "•"}{" "}

                {step.text}

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}