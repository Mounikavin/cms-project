import { useContext } from "react";
import StorageContext from "../../context/StorageContext";

export default function UserStats() {
  const { items } = useContext(StorageContext);

  const totalEvents = items.length;
  const favoriteEvents = items.filter(event => event.isFavorite).length;

  const upcomingEvents = items.filter(event => {
    if (!event.date) return false;
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  }).length;

  const categoryCounts = items.reduce((acc, event) => {
    if (!event.category) return acc;
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {});

  const totalCategories = Object.keys(categoryCounts).length;

  const chartData = Object.entries(categoryCounts).map(([category, count]) => ({
    category,
    count,
  }));

  const maxCount = Math.max(...chartData.map(d => d.count), 1);

  return (
    <div
      className="max-w-5xl mx-auto px-6 py-12"
      style={{
        background: "linear-gradient(to bottom right, #f4f0ec, #e8dbcf)",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#885133",
        borderRadius: "24px",
        boxShadow: "0 8px 24px rgba(136, 81, 51, 0.15)",
      }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
        Your Event Dashboard
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
        {[
          { label: "Total Events", count: totalEvents, bg: "#d62300" },
          { label: "Favorites", count: favoriteEvents, bg: "#885133" },
          { label: "Upcoming", count: upcomingEvents, bg: "#d62300cc" },
          { label: "Categories", count: totalCategories, bg: "#885133cc" },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-105 shadow-xl"
            style={{
              background: stat.bg,
              color: "#fff",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="text-4xl font-extrabold">{stat.count}</div>
            <div className="mt-2 font-semibold text-lg">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Chart Title */}
      <h3 className="text-2xl font-bold mb-6 text-center">Events by Category</h3>

      {/* Animated Bar Chart */}
      <div className="w-full overflow-x-auto">
        <svg
          height="240"
          width={chartData.length * 90}
          className="mx-auto transition-all"
          style={{ overflow: "visible" }}
        >
          {chartData.map(({ category, count }, idx) => {
            const barHeight = (count / maxCount) * 150;
            const x = idx * 90;

            return (
              <g key={category} transform={`translate(${x}, 0)`}>
                {/* Animated Bar */}
                <rect
                  y={180 - barHeight}
                  width="50"
                  height={barHeight}
                  fill="#d62300"
                  rx="8"
                  ry="8"
                  style={{
                    transition: "height 0.4s ease-in-out, y 0.4s ease-in-out",
                    cursor: "pointer",
                  }}
                />
                {/* Count Text */}
                <text
                  x="25"
                  y={180 - barHeight - 12}
                  fill="#885133"
                  fontWeight="bold"
                  fontSize="14"
                  textAnchor="middle"
                >
                  {count}
                </text>
                {/* Category Label */}
                <text
                  x="25"
                  y="205"
                  fill="#885133"
                  fontSize="13"
                  textAnchor="middle"
                  style={{ userSelect: "none", fontWeight: 500 }}
                >
                  {category}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Optional: Tooltip Support / Glow */}
      <style>{`
        rect:hover {
          fill: #b31f00;
        }
        text {
          font-family: 'Segoe UI', sans-serif;
        }
        @media (max-width: 640px) {
          svg {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

