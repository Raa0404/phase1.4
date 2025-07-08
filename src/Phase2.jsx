
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

export default function Phase2({ onNext, onBack }) {
  return (
    <div className='p-4 bg-yellow-100 min-h-screen'>
      <h2 className='text-xl font-bold mb-4'>Phase 2: Search Results</h2>
      <button onClick={() => onNext(dummyData)} className='px-4 py-2 bg-yellow-600 text-white rounded mr-4'>Proceed</button>
      <button onClick={onBack} className='px-4 py-2 bg-white border border-yellow-600 text-yellow-600 rounded'>Back</button>
    </div>
  );
}
