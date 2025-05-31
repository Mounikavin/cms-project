import React from 'react';


export default function About() {
  return (
    <div
      className="relative min-h-screen px-6 py-16 flex items-center justify-center"
      style={{ backgroundColor: '#f4f0ec' }}
    >
      {/* Background Image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600')",
          filter: 'blur(1px) brightness(0.7)', // minimal blur + darken
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>


      {/* Transparent warm color overlay */}
      <div
        className="absolute inset-0 bg-[#885133]/40" // 40% opacity warm brown overlay
        style={{ zIndex: 1 }}
      ></div>


      {/* Content Box */}
      <div
        className="relative w-full max-w-2xl p-6 rounded-3xl shadow-lg border bg-white/95 backdrop-blur-sm"
        style={{
          borderColor: '#d62300',
          boxShadow: '0 8px 24px rgba(136, 81, 51, 0.15)',
          color: '#885133',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",


          maxHeight: '600px',
          overflowY: 'auto',
          zIndex: 2,
        }}
      >
        {/* Decorative vertical accent bar */}
        <div
          className="absolute top-6 left-0 h-[calc(100%-48px)] w-1 rounded-r-xl"
          style={{ backgroundColor: '#d62300' }}
        ></div>


        <h1
          className="text-3xl font-extrabold mb-4 tracking-wide relative inline-block px-4"
          style={{
            color: '#885133',
            background: 'linear-gradient(90deg, #fbe8e6, #f4f0ec)',
            borderRadius: '12px',
          }}
        >
          About LumaEvents !!
        </h1>


        <p className="text-base leading-relaxed mb-6" style={{ color: '#6b4b33' }}>
          This Event Management CMS simplifies organizing and managing cultural and festival events.
          Users can create events, schedule activities, and manage participants seamlessly, all from a clean, user-friendly interface. Built with React and Tailwind CSS, it enhances event planning efficiency and collaboration.
        </p>


        <h2
          className="text-xl font-bold mb-5 border-b-4 inline-block pb-2"
          style={{ borderColor: '#d62300', color: '#885133' }}
        >
          Key Features
        </h2>


        <ul className="max-w-lg mx-auto space-y-4" style={{ color: '#6b4b33' }}>
          {[
            { icon: '🗓️', title: 'Event Creation', desc: 'Easily create and customize festival or cultural events with detailed descriptions and images.' },
            { icon: '⏰', title: 'Activity Scheduling', desc: 'Plan and organize event activities with clear time slots and reminders.' },
            { icon: '👥', title: 'Participant Management', desc: 'Track registrations, send notifications, and communicate with attendees effectively.' },
            { icon: '📊', title: 'Dashboard Overview', desc: 'Monitor event stats, upcoming activities, and real-time updates for smooth management.' },
 
            { icon: '🔐', title: 'Secure Access', desc: 'Role-based permissions ensure secure access to event data and administrative controls.' },
          ].map(({ icon, title, desc }) => (
            <li
              key={title}
              className="flex gap-3 items-start cursor-default rounded-lg p-2 transition-transform hover:scale-[1.03] hover:shadow-md"
              style={{ backgroundColor: 'rgba(214, 35, 0, 0.05)' }}
              title={title}
            >
              <span className="text-xl" aria-hidden="true">{icon}</span>
              <div>
                <strong className="block mb-1 text-base" style={{ color: '#885133' }}>{title}:</strong>
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
