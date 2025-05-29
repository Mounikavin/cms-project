import { Link, Outlet } from "react-router";

function BasicLayouts() {
  return (
    <>
      <header
        className="py-5 shadow-md flex flex-col sm:flex-row items-center justify-between px-8"
        style={{ backgroundColor: "#885133", color: "#f4f0ec" }}
      >
        <div className="text-3xl font-extrabold flex items-center gap-3 cursor-default select-none">
          <span role="img" aria-label="notes" style={{ fontSize: "2.5rem" }}>
            📝
          </span>
          <Link to={"/home"} className="hover:underline" style={{ color: "#f4f0ec" }}>
            Notes
          </Link>
        </div>

        <div className="mt-4 sm:mt-0 flex gap-6">
          <Link
            to={"/login"}
            className="px-8 py-2 rounded-full font-semibold transition shadow-md"
            style={{
              backgroundColor: "#f0e6d7",
              color: "#d62300",
              boxShadow: "0 4px 6px rgba(214, 35, 0, 0.3)",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#d62300";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(214, 35, 0, 0.6)";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#f0e6d7";
              e.target.style.color = "#d62300";
              e.target.style.boxShadow = "0 4px 6px rgba(214, 35, 0, 0.3)";
            }}
          >
            Sign In
          </Link>

          <Link
            to={"/sign-up"}
            className="px-8 py-2 rounded-full font-semibold transition shadow-md"
            style={{
              backgroundColor: "#d62300",
              color: "#fff",
              boxShadow: "0 4px 6px rgba(136, 81, 51, 0.3)",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#885133";
              e.target.style.boxShadow = "0 6px 12px rgba(136, 81, 51, 0.6)";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#d62300";
              e.target.style.boxShadow = "0 4px 6px rgba(136, 81, 51, 0.3)";
            }}
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main
        className="min-h-[calc(100vh-128px)] p-8"
        style={{ backgroundColor: "#f0e6d7", color: "#885133" }}
      >
        <Outlet />
      </main>

      <footer
        className="py-5 text-center mt-12 border-t"
        style={{ backgroundColor: "#f4f0ec", color: "#885133", borderColor: "#d62300" }}
      >
        © {new Date().getFullYear()} Notes App. All rights reserved.
      </footer>
    </>
  );
}

export default BasicLayouts;