import React from 'react';
import { Link } from 'react-router-dom'; // To handle navigation between pages
import Navbar from './Navbar'; // Import Navbar component

const HeroSection = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">
            Find Your Dream Home with Ease,<br />on Property Dekho.
          </h1>
          <p className="px-4 leading-relaxed">
            Property Dekho simplifies the home search process by connecting you directly to the best agents.<br />
            Spend less time searching and more time enjoying your new home.
          </p>
          <p className="mb-8 mt-4 px-4 leading-relaxed">
            And the best part...
            <span className="text-pink-600 font-bold">It's absolutely free!</span>
          </p>
          <div>
            <Link
              className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold"
              to="/login"
            >
              Sign-up for Free
            </Link>
          </div>
          <div className="mt-4">
            <Link
              className="inline-block py-2 px-6 text-sm font-medium text-slate-800 hover:text-pink-600"
              to="/login"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
