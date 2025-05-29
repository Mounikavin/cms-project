import React from 'react';
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <header className="bg-fuchsia-600 text-white text-4xl font-extrabold text-center py-6 shadow-lg tracking-wider uppercase drop-shadow-md animate-fade-in">
        Heading
      </header>

      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-96px)] bg-gradient-to-br from-rose-100 via-white to-sky-100 px-4 py-12 space-y-10 transition-all duration-500 ease-in-out">

        <div className="bg-white/80 backdrop-blur-lg border border-stone-200 rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center hover:shadow-fuchsia-300 transition-shadow duration-300 transform hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-fuchsia-700 mb-4 drop-shadow-sm tracking-tight animate-slide-in">
            Welcome to My Application
          </h2>
        </div>

        <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-fuchsia-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 animate-bounce">
          <Link to={'/login'}>
            Get Started
          </Link>
        </button>
      </section>
    </>
  );
}
