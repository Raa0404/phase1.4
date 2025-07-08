
export default function Phase1({ onNext, language, setLanguage }) {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-200 to-blue-400 min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-900 text-center">Welcome to Nivaran</h1>
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <label className="block mb-2 font-semibold text-blue-800">Enter SOL ID (8701–8771):</label>
        <input
          type="number"
          className="w-full border border-blue-300 rounded p-2 mb-4"
          min="8701"
          max="8771"
        />
        <div className="flex justify-between items-center mb-4">
          <label className="font-semibold text-blue-800">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-blue-300 p-2 rounded"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
        <button
          onClick={onNext}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Proceed
        </button>
      </div>
      <div className="text-red-600 font-bold text-sm mt-6">© P.Raa</div>
    </div>
  );
}
