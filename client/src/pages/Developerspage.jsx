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
    <div
      className="relative min-h-screen p-10"
      style={{ backgroundColor: "#f4f0ec", color: "#885133", fontFamily: "Segoe UI, sans-serif" }}
    >
      {/* Background Image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600')",
          filter: 'blur(1px) brightness(0.7)',
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>


      {/* Transparent warm color overlay */}
      <div
        className="absolute inset-0 bg-[#885133]/40"
        style={{ zIndex: 1 }}
      ></div>


      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto p-10 rounded-3xl shadow-lg border bg-white/95 backdrop-blur-sm"
        style={{
          borderColor: "#d62300",
          boxShadow: "0 8px 16px rgba(214, 35, 0, 0.3)",
          zIndex: 2,
        }}
      >
        <h1
          className="text-4xl font-extrabold text-center mb-10 tracking-wide"
          style={{ color: "#d62300" }}
        >
          👩‍💻 Team & Project Details
        </h1>


        {/* Project Overview */}
        <section className="mb-12">
          <h2
            className="text-3xl font-bold mb-4 border-b-4 inline-block pb-2"
            style={{ borderColor: "#d62300", color: "#885133" }}
          >
            📘 Project Overview
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#5c3a23" }}>
            This Festival & Event Management CMS is designed to simplify organizing, scheduling, and
            managing cultural events with an easy-to-use interface. It helps event managers create and
            track events, manage participants, and ensure smooth festival operations.
          </p>
        </section>


        {/* Team Members */}
        <section className="mb-12">
          <h2
            className="text-3xl font-bold mb-6 border-b-4 inline-block pb-2"
            style={{ borderColor: "#d62300", color: "#885133" }}
          >
            👥 Team Members
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-l-8 shadow-md transition-shadow duration-300"
                style={{ borderColor: "#d62300", backgroundColor: "#f4f0ec" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(214, 35, 0, 0.4)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 3px 6px rgba(136, 81, 51, 0.2)"}
              >
                <h3 className="text-2xl font-semibold" style={{ color: "#885133" }}>
                  {member.name}
                </h3>
                <span
                  className="inline-block rounded-full px-3 py-1 mt-2 mb-3 font-medium text-sm"
                  style={{ backgroundColor: "#d62300", color: "#f4f0ec" }}
                >
                  {member.role}
                </span>
                <p style={{ color: "#5c3a23" }}>{member.email}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Institution Details */}
        <section>
          <h2
            className="text-3xl font-bold mb-4 border-b-4 inline-block pb-2"
            style={{ borderColor: "#d62300", color: "#885133" }}
          >
            🎓 Institution Details
          </h2>
          <ul className="text-lg" style={{ color: "#5c3a23", lineHeight: "1.8" }}>
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
