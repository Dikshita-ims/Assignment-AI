export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">

      <div className="w-52 h-52 rounded-full bg-[#f4f4f4] flex items-center justify-center text-7xl mb-8 shadow-inner">
        📚
      </div>

      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        No assignments yet
      </h2>

      <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-8">
        Create your first assignment to start collecting and grading student submissions.
      </p>

      <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all">
        + Create Your First Assignment
      </button>

    </div>
  );
}