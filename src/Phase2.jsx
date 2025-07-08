
const dummyData = [
  {
    "CIF ID": "C00003884",
    "Number of Accounts": 2,
    "NPA Category": "DB2",
    "Account Number": "8725CF00000310",
    "Borrower Name": "HIDAYAH BRICK FIELD",
    "NPA Date": "2022-10-04",
    "CIF Outstanding": 319681.81,
    "Principal O/S": 245807.81,
    "Minimum Settlement": 172065.467,
    "Sacrifice": 85085.768041
  }
];

export default function Phase2({ onNext, onBack, language }) {
  return (
    <div className="p-6 bg-yellow-100 min-h-screen">
      <div className="text-right text-sm font-semibold text-red-600">© P.Raa</div>
      <h2 className="text-2xl font-bold text-yellow-800 mb-6">Phase 2: {language === 'hi' ? 'खाता विवरण' : 'Account Details'}</h2>

      <div className="bg-white rounded shadow p-4 mb-4">
        <p><strong>{language === 'hi' ? 'सीआईएफ आईडी' : 'CIF ID'}:</strong> {dummyData[0]["CIF ID"]}</p>
        <p><strong>{language === 'hi' ? 'खातों की संख्या' : 'Number of Accounts'}:</strong> {dummyData[0]["Number of Accounts"]}</p>
      </div>

      {dummyData.map((acc, idx) => (
        <div key={idx} className="bg-white rounded shadow p-4 mb-4 text-sm">
          <p><strong>{acc["Account Number"]}</strong> | {acc["Borrower Name"]} | {acc["NPA Date"]} | ₹{acc["CIF Outstanding"]} | ₹{acc["Principal O/S"]}</p>
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="px-4 py-2 bg-white border border-yellow-600 text-yellow-700 rounded">Back</button>
        <button onClick={() => onNext(dummyData)} className="px-4 py-2 bg-yellow-600 text-white rounded">Proceed</button>
      </div>
    </div>
  );
}
