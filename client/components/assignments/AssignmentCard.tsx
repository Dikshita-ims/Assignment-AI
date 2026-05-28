type AssignmentCardProps = {

  title: string;

  subject: string;

  questions: number;

  submissions: number;

  status: "Active" | "Draft";
};

export default function AssignmentCard({

  title,

  subject,

  questions,

  submissions,

  status,

}: AssignmentCardProps) {

  return (

    <div className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

      <div className="flex items-start justify-between mb-8">

        <div>

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-white text-2xl mb-5 shadow-md">

            📘

          </div>

          <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-orange-500 transition-all">

            {title}

          </h3>

          <p className="text-gray-600 text-sm font-medium">

            {subject}

          </p>

        </div>

        <span
          className={`px-4 py-2 rounded-full text-xs font-semibold ${
            status === "Active"
              ? "bg-green-100 text-green-700"

              : "bg-gray-200 text-gray-700"
          }`}
        >

          {status}

        </span>

      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-[#f5f5f5] rounded-2xl p-4">

          <p className="text-gray-500 text-xs mb-2">

            Questions

          </p>

          <h4 className="text-2xl font-bold text-gray-900">

            {questions}

          </h4>

        </div>

        <div className="bg-[#f5f5f5] rounded-2xl p-4">

          <p className="text-gray-500 text-xs mb-2">

            Submissions

          </p>

          <h4 className="text-2xl font-bold text-gray-900">

            {submissions}

          </h4>

        </div>

      </div>

      <div className="flex items-center justify-between">

        <p className="text-sm text-gray-500">

          AI-powered assessment

        </p>

        <button className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-all">

          View Details →

        </button>

      </div>

    </div>
  );
}