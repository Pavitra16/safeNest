import { NavLink } from "react-router-dom"
import "./layoutStyle.css";


export default function Navbar({ isLoggedIn }) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md px-10 py-5">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 text-brand-pink font-bold text-xl">
          <div className="w-6 h-6 border-2 border-brand-pink rounded rotate-45" />
          SafeNest
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <a href="/#features"  className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }>
          Features
          </a>

             <a href="/#how-it-works"  className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }>
          How It Works
          </a>
         

          <NavLink
            to="/job-scanner"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Job Scanner
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition"
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* Right Side Buttons */}
        <div className="flex gap-6 items-center">

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="text-sm font-bold"
              >
                Log in
              </NavLink>

              <NavLink
                to="/signup"
                className="bg-brand-pink px-6 py-2 rounded-lg text-sm font-bold"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/profile"
              className="bg-brand-pink px-6 py-2 rounded-lg text-sm font-bold"
            >
              Profile
            </NavLink>
          )}

        </div>

      </div>
    </nav>
  );
}