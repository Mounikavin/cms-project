
import { useEffect, useState } from "react";

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0e6d7] relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[#f5d7c2] clip-diagonal" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full p-10 gap-16">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#885133] leading-tight">
            Celebrate Life’s <br /> Moments with Joy
          </h1>
          <p className="text-lg md:text-xl text-[#885133] tracking-wide leading-relaxed">
            Discover vibrant festivals and cultural events near you. Dive into traditions, taste authentic cuisine, and create unforgettable memories with every celebration.
          </p>
          <button className="mt-2 inline-block bg-[#d62300] hover:bg-[#885133] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Explore Events
          </button>
          <p className="text-sm text-[#885133] italic mt-4">
            Your gateway to cultural diversity and festive joy.
          </p>
        </div>

        {/* Right Image Grid */}
        <div
          className={`md:w-1/2 grid grid-cols-2 gap-6 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image 1 */}
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?cs=srgb&dl=pexels-vishnurnair-1105666.jpg&fm=jpg"
            alt="Lantern Festival"
            className="w-full h-[260px] rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Image 2 */}
          <img
            src="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Traditional Dance"
            className="w-full h-[260px] rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Image 3 */}
          <img
            src="https://images.pexels.com/photos/450301/pexels-photo-450301.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Colorful Parade"
            className="w-full h-[260px] rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Image 4 */}
          <img
            src="https://media.istockphoto.com/id/179582649/photo/multi-colored-hand.jpg?s=612x612&w=0&k=20&c=UK4xyR47hl3m45MwG51R_8h4cAdXsqVFIuE30pzRiRs="
            alt="Festival Music"
            className="w-full h-[260px] rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Custom Clip Path Style */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}

export default Home;