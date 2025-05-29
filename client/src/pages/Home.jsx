import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
     
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] bg-gradient-to-br from-rose-100 via-white to-sky-100 px-4 py-12 space-y-10 relative overflow-hidden">

        {/* Animated background glow */}
        <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-30 blur-3xl rounded-full top-1/4 left-1/4 animate-pulse z-0"></div>

        <div className="bg-white/80 backdrop-blur-lg border border-stone-200 rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center hover:shadow-fuchsia-400 transition-shadow duration-500 transform hover:scale-[1.03] z-10">
          <h2 className="text-3xl font-bold text-fuchsia-700 mb-4 drop-shadow-md tracking-tight animate-slide-in">
            Welcome to My Application
          </h2>
        </div>

        <button className="z-10 bg-fuchsia-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-fuchsia-700 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 animate-bounce group">
          <Link to={'/login'} className="flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:translate-x-1">Get Started</span>
            <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </button>
      </section>
    </>
  );
}
