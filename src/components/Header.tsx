import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-green-700">GetSol</a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="text-gray-700 hover:text-green-700">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/swap">
                <a className="text-gray-700 hover:text-green-700">Swap</a>
              </Link>
            </li>
            <li>
              <Link href="/confirm?ref=123">
                <a className="text-gray-700 hover:text-green-700">Confirm</a>
              </Link>
            </li>
            <li>
              <Link href="/receipt?tx=456">
                <a className="text-gray-700 hover:text-green-700">Receipt</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="text-gray-700 hover:text-green-700">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className="text-gray-700 hover:text-green-700">Signup</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
