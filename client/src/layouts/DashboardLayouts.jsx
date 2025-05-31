import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router";
import AuthContext from "../context/AuthContext";

const CMS_PATHS = [
  { path: "/dashboard/cms/user-stats", text: "User Stats" },
  { path: "/dashboard/cms/add", text: "Add Item" },
  { path: "/dashboard/cms/display", text: " All Content" },
  { path: "/dashboard/cms/favorites", text: " My Favorites" },
];

export default function DashboardLayouts() {
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#f0e6d7" }}>
      {/* Sidebar */}
      <aside
        className="p-8 w-64 sticky top-0 h-screen shadow-2xl flex flex-col"
        style={{
          background: "linear-gradient(to bottom, #885133, #6b3c26)",
          color: "#f4f0ec",
        }}
      >
        <div className="text-3xl font-extrabold mb-8 tracking-wide text-center">
          CMS Panel 
        </div>

        <nav className="flex flex-col gap-4 mb-6">
          {CMS_PATHS.map(({ path, text }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-[#d62300] text-white shadow"
                    : "hover:bg-[#6b3c26] hover:text-white text-[#f4f0ec]"
                }`}
              >
                {text}
              </Link>
            );
          })}
        </nav>
        {/* Logout button */}
        <button
          onClick={logout}
          className="mt-auto bg-[#d62300] hover:bg-[#a81d00] text-white py-2 w-full rounded-lg font-semibold transition shadow-md"
        >
          Logout
        </button>
      </aside>
      {/* Main Content */}
      <main
        className="flex-1 overflow-auto p-10"
        style={{ backgroundColor: "#f0e6d7", color: "#885133" }}
      >
        <Outlet />
      </main>
    </div>
  );
}
