import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { fetchReceipt } from '../utils/api';

const Receipt = () => {
  // const router = useRouter();
  // const { tx } = router.query;
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // if (!tx) {
    //   setError('Transaction ID is missing.');
    //   setLoading(false);
    //   return;
    // }

    // const getReceipt = async () => {
    //   try {
    //     const data = await fetchReceipt({ transactionId: tx as string });
    //     setReceipt(data);
    //     setLoading(false);
    //   } catch (err: any) {
    //     setError(err.message || 'An error occurred');
    //     setLoading(false);
    //   }
    // };

    // getReceipt();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-green-700">GetSol - Receipt</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Transaction Receipt</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {loading ? (
          <div>Loading receipt...</div>
        ) : (
          <div>Receipt Page</div>
          // <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          //   <div className="mb-4">
          //     <label className="block text-gray-700 text-sm font-bold mb-2">
          //       Transaction ID:
          //     </label>
          //     <p className="text-gray-700">{receipt.transactionId}</p>
          //   </div>
          //   <div className="mb-4">
          //     <label className="block text-gray-700 text-sm font-bold mb-2">
          //       Amount (NGN):
          //     </label>
          //     <p className="text-gray-700">{receipt.amountNGN}</p>
          //   </div>
          //   <div className="mb-4">
          //     <label className="block text-gray-700 text-sm font-bold mb-2">
          //       Amount (SOL):
          //     </label>
          //     <p className="text-gray-700">{receipt.solAmount}</p>
          //   </div>
          //   <div className="mb-4">
          //     <label className="block text-gray-700 text-sm font-bold mb-2">
          //       Timestamp:
          //     </label>
          //     <p className="text-gray-700">{receipt.timestamp}</p>
          //   </div>
          //   <a
          //     href={`https://twitter.com/intent/tweet?text=I just swapped NGN 5000 for SOL 0.02 on GetSol!`}
          //     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     Share on Twitter
          //   </a>
          // </div>
        )}
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} GetSol. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Receipt;
