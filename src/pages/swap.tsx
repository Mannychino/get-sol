import React, { useState } from 'react';
import { initiateSwap } from '../utils/api';

const Swap = () => {
  const [amountNGN, setAmountNGN] = useState('');
  const [bank, setBank] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [swapDetails, setSwapDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Replace with actual user ID from authentication context
      const userId = 'user-123';

      const data = await initiateSwap({ userId, amountNGN: Number(amountNGN), bank, walletAddress });
      setSwapDetails(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Placeholder for authentication check
  const isAuthenticated = true; // Replace with actual authentication logic
  if (!isAuthenticated) {
    return <div>Please <a href="/login">login</a> to access this page.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-green-700">GetSol - Swap</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Swap NGN for SOL</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {!swapDetails ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="amountNGN" className="block text-gray-700 text-sm font-bold mb-2">
                Amount (NGN):
              </label>
              <input
                type="number"
                id="amountNGN"
                value={amountNGN}
                onChange={(e) => setAmountNGN(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter amount in NGN"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">
                Bank:
              </label>
              <input
                type="text"
                id="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your bank name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="walletAddress" className="block text-gray-700 text-sm font-bold mb-2">
                SOL Wallet Address:
              </label>
              <input
                type="text"
                id="walletAddress"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your SOL wallet address"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Initiating Swap...' : 'Initiate Swap'}
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Account Details</h3>
            <p className="text-gray-700 mb-2">
              Please send <span className="font-bold">NGN {swapDetails.amountNGN}</span> to the following virtual account:
            </p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Account Number:
              </label>
              <p className="text-gray-700">{swapDetails.virtualAccount}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bank Name:
              </label>
              <p className="text-gray-700">{swapDetails.bankName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Account Name:
              </label>
              <p className="text-gray-700">{swapDetails.accountName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Reference:
              </label>
              <p className="text-gray-700">{swapDetails.referenceId}</p>
            </div>
            <p className="text-gray-700">
              After sending the money, please wait for confirmation.
            </p>
          </div>
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

export default Swap;
