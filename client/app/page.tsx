import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/Navbar";
import AssignmentCard from "@/components/assignments/AssignmentCard";

export default function Home() {
  return (
    <main className="flex bg-[#f5f5f5] min-h-screen">

      <Sidebar />

      <section className="flex-1 p-6">

        <Navbar />

        <div className="mt-6">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Assignments
              </h1>

              <p className="text-gray-700 mt-2">
                Manage and generate AI-powered assessments
              </p>
            </div>

            <button className="bg-black text-white px-6 py-4 rounded-full font-medium hover:opacity-90 transition-all">
              + Create Assignment
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <AssignmentCard
              title="Mathematics Final Assessment"
              subject="Mathematics"
              questions={20}
              submissions={45}
              status="Active"
            />

            <AssignmentCard
              title="Physics Quiz Chapter 4"
              subject="Physics"
              questions={15}
              submissions={30}
              status="Draft"
            />

            <AssignmentCard
              title="Chemistry Midterm Paper"
              subject="Chemistry"
              questions={25}
              submissions={52}
              status="Active"
            />

          </div>

        </div>

      </section>

    </main>
  );
}