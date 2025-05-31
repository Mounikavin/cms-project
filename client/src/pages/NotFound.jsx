import React from 'react';
import { Link } from 'react-router';


export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#885133]/20 via-[#d62300]/20 to-[#f0e6d7]/40 px-6"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="bg-white/95 rounded-3xl shadow-2xl p-16 flex flex-col items-center max-w-lg w-full relative overflow-hidden">
     


        <h1 className="text-8xl font-extrabold text-[#d62300] mb-6 drop-shadow-lg select-none animate-pulse">
          404
        </h1>
        <p className="text-4xl font-semibold text-[#885133] mb-4 text-center">
          Oops! Page Not Found
        </p>
        <p className="text-[#885133]/90 mb-10 text-center text-lg max-w-md leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved. Try going back to the homepage.
        </p>
        <Link
          to={'/home'}
          className="inline-block px-10 py-4 bg-[#d62300] text-white rounded-full shadow-lg font-semibold transition transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#885133]/50"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}


