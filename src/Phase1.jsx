
export default function Phase1({ onNext }) {
  return (
    <div className='p-4 bg-blue-100 min-h-screen'>
      <h2 className='text-xl font-bold mb-4'>Phase 1: Welcome to Nivaran</h2>
      <button onClick={onNext} className='px-4 py-2 bg-blue-600 text-white rounded'>Proceed to Phase 2</button>
    </div>
  );
}
