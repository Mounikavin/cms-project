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
    role: "Team member",
    email: "harshitha1552005@gmail.com"
  }
];

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Favourite Movie List
        </h1>

        {/* Project Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">📘 Project Overview</h2>
          <p className="text-gray-600">
                 A React-based webpage showcasing a curated list of favorite movies along with team and project details.       </p>
        </section>

        {/* Team Members */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">👥 Team Members</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="border-l-4 border-blue-500 bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p>{member.role}</p>
                <p className="text-sm text-gray-600">{member.email}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Institution */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">🎓 Institution Details</h2>
          <p><strong>College Name:</strong> Karpagam Academy of Higher Education</p>
          <p><strong>Department:</strong> Computer Science and Design</p>
          <p><strong>Academic Year:</strong> 2022 – 2026</p>
        </section>

      </div>
    </div>
  );
};

export default DeveloperPage;