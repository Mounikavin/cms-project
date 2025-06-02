import { useContext } from "react";
import StorageContext from "../../context/StorageContext";
import Card from "../../components/cms/Card";

export default function DisplayAllEvents() {
  const { items } = useContext(StorageContext);

  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily: "Segoe UI, sans-serif",
        backgroundImage:
          "url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#885133",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(240, 230, 215, 0.88)",
          backdropFilter: "blur(4px)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="relative z-10 px-6 py-16 mx-auto max-w-7xl"
        style={{ animation: "fadeIn 1s ease-out" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 tracking-tight text-[#885133]">
          All Festival & Cultural Events
        </h1>

        {items.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-xl sm:text-2xl italic text-[#6b3c26] mb-3 animate-pulse">
              No events added yet.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Head over to{" "}
              <span className="font-semibold text-[#d62300] underline">Add Item</span>{" "}
              and create your first event!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((event, index) => (
              <div
                key={index}
                className="transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Card item={event} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
