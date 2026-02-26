import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">
          🏥 MediScheduler
        </h1>

        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Add Doctor
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Doctor List
          </NavLink>

          <NavLink
            to="/book"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Book Appointment
          </NavLink>
        </div>
      </div>
    </nav>
  );
}