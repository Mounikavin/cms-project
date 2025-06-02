
import { useContext, useState } from "react";
import StorageContext from "../../context/StorageContext";

export default function Card({ item, index }) {
  const [isFavorite, setIsFavorite] = useState(item?.isFavorite);
  const { deleteItem, updateItem } = useContext(StorageContext);

  function handleDelete() {
    deleteItem(index);
  }

  function handleFavorite() {
    updateItem(index, { isFavorite: !isFavorite });
    setIsFavorite(!isFavorite);
  }

  return (
    <div
      className="flex flex-col p-6 rounded-3xl shadow-lg backdrop-blur-md"
      style={{
        background: "rgba(244, 240, 236, 0.85)",
        border: "2px solid #885133",
        color: "#4a2f1b",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        width: "280px",
        minHeight: "380px",
        margin: "auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 10px 35px rgba(214, 35, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(136, 81, 51, 0.15)";
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 20px auto",
          border: "4px solid #d62300",
          boxShadow: "0 4px 20px rgba(214, 35, 0, 0.35)",
        }}
      >
        <img
          src={item.image || item.imgUrl}
          alt={item.title || item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          marginBottom: "14px",
          textAlign: "center",
          letterSpacing: "0.05em",
          textShadow: "1px 1px 3px rgba(214, 35, 0, 0.7)",
          color: "#885133",
        }}
      >
        {item.title || item.name}
      </h3>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.4",
          marginBottom: "8px", // reduced from 18px
          minHeight: "40px", // reduced height
          textAlign: "center",
          color: "#6b4a2c",
        }}
      >
        {item.description || item.desc}
      </p>

      <div
        className="flex flex-col gap-1 mb-4" // reduced spacing
        style={{ fontSize: "1.05rem", fontWeight: "600" }}
      >
        <div>
          📍 <span style={{ color: "#885133" }}>{item.venue || item.company}</span>
        </div>
        <div>
          📅 <span style={{ color: "#885133" }}>{item.date || item.madeIn}</span>
        </div>
        <div>
          🎭 <span style={{ color: "#885133" }}>{item.category}</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-auto">
        <button
          onClick={handleFavorite}
          className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-inner border-2 ${
            isFavorite
              ? "bg-yellow-400/90 text-[#4a320a] border-yellow-500 hover:bg-yellow-300"
              : "bg-[#fdfaf7] text-[#885133] border-[#885133] hover:bg-[#f4f0ec]"
          }`}
        >
          {isFavorite ? "⭐ Favorited" : "☆ Favorite"}
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 py-2 rounded-full text-sm font-semibold border-2 border-[#d62300] text-[#d62300] bg-transparent hover:bg-[#d62300] hover:text-white transition-all duration-300 shadow-sm"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}