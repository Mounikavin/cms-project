import React from 'react';

const teamMembers = [
  {
    name: "Mounika M",
    role: "Team Leader",
    email: "mounikavin123@gamil.com"
  },
  {
    name: "Saranya M",
    role: "Team Member",
    email: "saranyasara1101@gmail.com"
  },
  {
    name: "Harshitha A",
    role: "Team Member",
    email: "harshitha1552005@gmail.com"
  }
];

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-indigo-200">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10 tracking-wide">
          🎬 Favourite Movie List
        </h1>

        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-indigo-300 inline-block pb-1">
            📘 Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            This project enhances privacy in messaging apps by detecting and preventing screenshots. 
            Inspired by WhatsApp and Snapchat, it adds extra security layers for private content.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-300 inline-block pb-1">
            👥 Team Members
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-500 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full mt-1 mb-2">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600">{member.email}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Institution */}
        <section className="mb-4">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3 border-b-2 border-indigo-300 inline-block pb-1">
            🎓 Institution Details
          </h2>
          <ul className="text-gray-700 space-y-1 mt-2">
            <li><strong>🏫 College Name:</strong> Karpagam Academy of Higher Education</li>
            <li><strong>💻 Department:</strong> Computer Science and Design</li>
            <li><strong>📅 Academic Year:</strong> 2022 – 2026</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DeveloperPage;