import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight mb-6">
              Smart & Advance <br /> Hospital Appointment System
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Automatically assigns doctors based on availability,
              ensuring balanced workload and better patient experience.
            </p>

            <div className="flex gap-4">
              <Link
                to="/book"
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
              >
                Book Appointment
              </Link>

              <Link
                to="/doctors"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-50 transition"
              >
                View Doctors
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
                <p className="text-gray-500">Doctors</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-indigo-600">5000+</h3>
                <p className="text-gray-500">Patients Served</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-indigo-600">99%</h3>
                <p className="text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1580281657527-47b7f7e3e45e?auto=format&fit=crop&w=800&q=80"
              alt="Doctor"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-indigo-600 font-semibold">
                Fair Allocation Algorithm
              </p>
              <p className="text-gray-500 text-sm">
                Automatically assigns doctor with least appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-12">
            Why Choose Our System?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
                alt="Balanced workload"
                className="rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">
                Balanced Workload
              </h3>
              <p className="text-gray-500">
                Doctors are assigned based on lowest current appointments.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80"
                alt="Real-time updates"
                className="rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">
                Real-Time Updates
              </h3>
              <p className="text-gray-500">
                Appointment counts update instantly after booking.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
                alt="Efficient management"
                className="rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">
                Efficient Management
              </h3>
              <p className="text-gray-500">
                Easily add doctors and manage patient flow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-indigo-700 text-white py-6 text-center">
        © {new Date().getFullYear()} Smart Hospital System | Built with ❤️
      </footer>
    </>
  );
}