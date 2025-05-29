import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-16 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 tracking-tight">
          About Store Favorite Movie List
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          This project allows users to create and manage their personal list of favorite movies. 
          Users can add, view, and organize movies they love all in one place. Built with React and styled using Tailwind CSS, the app offers a simple and user-friendly interface to keep track of your movie preferences effortlessly.
        </p>
      </div>
    </div>
  );
}