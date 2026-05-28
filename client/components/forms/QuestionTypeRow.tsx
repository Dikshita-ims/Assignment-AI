type QuestionTypeRowProps = {
  id: number;
  type: string;
  questions: number;
  marks: number;
  onRemove: (id: number) => void;
};

export default function QuestionTypeRow({
  id,
  type,
  questions,
  marks,
  onRemove,
}: QuestionTypeRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      <select className="border border-gray-300 rounded-2xl px-5 py-4 text-sm bg-white">
        <option>{type}</option>

        <option>Multiple Choice</option>
        <option>Short Answer</option>
        <option>Long Answer</option>
      </select>

      <input
        type="number"
        value={questions}
        className="border border-gray-300 rounded-2xl px-5 py-4 text-sm"
        readOnly
      />

      <input
        type="number"
        value={marks}
        className="border border-gray-300 rounded-2xl px-5 py-4 text-sm"
        readOnly
      />

      <button
        onClick={() => onRemove(id)}
        className="bg-red-100 text-red-600 rounded-2xl px-4 py-3 font-medium hover:bg-red-200 transition-all"
      >
        Remove
      </button>

    </div>
  );
}