import { useContext } from "react";
import StorageContext from "../../context/StorageContext";
import Card from "../../components/cms/Card";

export default function MyFavoritesEvents() {
  const { items } = useContext(StorageContext);

  const favorites = items.filter((event) => event.isFavorite);

  if (favorites.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center h-96 rounded-lg shadow-inner px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(214,35,0,0.15), rgba(136,81,51,0.12))",
          color: "#885133",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textAlign: "center",
        }}
      >
        <span className="text-yellow-700 text-xl font-semibold mb-4">
          No favorite events selected 
        </span>
        <p className="text-[#885133cc] max-w-md">
          Explore events and tap the{" "}
          <span className="font-bold text-[#d62300]">⭐ Favorite</span> button to
          save your favorites here.
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-6 py-10 rounded-lg"
      style={{
        background: "linear-gradient(135deg, #ffe0c3, #fad0c4)", // 🌅 Stunning warm gradient
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#885133",
      }}
    >
      <h1
        className="text-3xl font-extrabold mb-8 text-center tracking-wider"
        style={{
          borderBottom: "3px solid #d62300",
          display: "inline-block",
          paddingBottom: "8px",
          marginBottom: "32px",
        }}
      >
        My Favorite Festival & Cultural Events
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        style={{
          background: "rgba(255, 255, 255, 0.4)", // slight transparency
          padding: "20px",
          borderRadius: "18px",
          boxShadow: "0 8px 30px rgba(136, 81, 51, 0.12)",
          backdropFilter: "blur(4px)",
        }}
      >
        {favorites.map((event, index) => (
          <Card key={index} item={event} index={index} />
        ))}
      </div>
    </div>
  );
}


