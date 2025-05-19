import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-green-700">GetSol</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Buy SOL with Naira
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            The easiest way to on-ramp from NGN to SOL using Next.js, React, and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Sign Up
            </button>
          </div>
          <Link href="https://t.me/getsol">
            <a className="inline-block mt-4 text-blue-500 hover:text-blue-700">
              Join our Telegram
            </a>
          </Link>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded shadow-md bg-white">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Sign Up</h4>
              <p className="text-gray-700">Create an account with your email and password.</p>
            </div>
            <div className="p-4 rounded shadow-md bg-white">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Swap NGN for SOL</h4>
              <p className="text-gray-700">Enter the amount of NGN you want to swap and your SOL wallet address.</p>
            </div>
            <div className="p-4 rounded shadow-md bg-white">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Confirm Payment</h4>
              <p className="text-gray-700">Send NGN to the generated virtual account and confirm your payment.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} GetSol. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
