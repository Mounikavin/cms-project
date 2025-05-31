import { Link, Outlet } from "react-router";


function BasicLayouts() {
  const baseButtonStyle = {
    padding: '0.5rem 1.5rem', // px-6 py-2 equivalent
    borderRadius: '9999px',   // rounded-full
    fontWeight: '700',        // font-bold
    fontSize: '0.875rem',     // text-sm
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(136, 81, 51, 0.3)',
    display: 'inline-block',
    userSelect: 'none',
  };


  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#885133";
    e.target.style.color = "#f4f0ec";
    e.target.style.boxShadow = "0 6px 12px rgba(136, 81, 51, 0.6)";
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = e.target.getAttribute('data-bgcolor');
    e.target.style.color = e.target.getAttribute('data-color');
    e.target.style.boxShadow = "0 4px 8px rgba(136, 81, 51, 0.3)";
  };


  // Updated nav buttons: Developer and Sign In now match About button style
  const navButtons = [
    {
      to: "/about",
      label: "About",
      bgColor: "#d62300",
      color: "#fff",
    },
    {
      to: "/developer",
      label: "Developer",
      bgColor: "#d62300",   // changed to About button's red
      color: "#fff",
    },
    {
      to: "/login",
      label: "Sign In",
      bgColor: "#d62300",   // changed to About button's red
      color: "#fff",
    },
    {
      to: "/sign-up",
      label: "Sign Up",
      bgColor: "#d62300",
      color: "#fff",
    },
  ];


  return (
    <>
      {/* Header */}
      <header
        className="py-6 shadow-lg flex flex-col sm:flex-row items-center justify-between px-10"
        style={{ backgroundColor: "#885133", color: "#f4f0ec" }}
      >
        <div className="text-4xl font-black tracking-wide flex items-center gap-4 select-none">
          <Link
            to={"/home"}
            className="hover:underline transition-all"
            style={{ color: "#f4f0ec" }}
          >
            LumaEvents
          </Link>
        </div>


        {/* Navigation Links */}
        <nav className="mt-5 sm:mt-0 flex gap-6 flex-wrap items-center justify-center sm:justify-end">
          {navButtons.map(({ to, label, bgColor, color }) => (
            <Link
              key={to}
              to={to}
              className="font-bold text-sm transition"
              style={{
                ...baseButtonStyle,
                backgroundColor: bgColor,
                color: color,
              }}
              data-bgcolor={bgColor}
              data-color={color}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>


      {/* Main Content */}
      <main
        className="min-h-[calc(100vh-140px)] p-10"
        style={{
          backgroundColor: "#f0e6d7",
          color: "#885133",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <Outlet />
      </main>


      {/* Footer */}
      <footer
        className="py-4 text-center border-t"
        style={{
          backgroundColor: "#885133",
          color: "#f4f0ec",
          borderColor: "#d62300",
        }}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Festival & Event CMS. Celebrate the moments.
        </p>
      </footer>
    </>
  );
}


export default BasicLayouts;


