import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { confirmPayment } from '../utils/api';

const Confirm = () => {
  const router = useRouter();
  const { ref } = router.query;
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!ref) {
      setError('Reference ID is missing.');
      setLoading(false);
      return;
    }

    const pollConfirmation = async () => {
      try {
        const data = await confirmPayment({ reference: ref as string });
        setConfirmation(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
        setLoading(false);
      }
    };

    const intervalId = setInterval(() => {
      pollConfirmation();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [ref]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-green-700">GetSol - Confirm</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Confirm Payment</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {loading ? (
          <div>Waiting for bank transfer...</div>
        ) : confirmation ? (
          <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {confirmation.status === 'confirmed' ? (
              <>
                <p className="text-gray-700 mb-2">
                  Payment Confirmed!
                </p>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    SOL Amount:
                  </label>
                  <p className="text-gray-700">{confirmation.solAmount}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Transaction Signature:
                  </label>
                  <p className="text-gray-700">{confirmation.txSignature}</p>
                </div>
                <a
                  href={`https://explorer.solana.com/tx/${confirmation.txSignature}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Explorer
                </a>
              </>
            ) : (
              <div>Waiting for bank transfer...</div>
            )}
          </div>
        ) : (
          <div>Waiting for bank transfer...</div>
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

export default Confirm;
