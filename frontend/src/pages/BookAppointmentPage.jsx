import Navbar from "../components/Navbar";
import BookAppointment from "../components/BookAppointment";

export default function BookAppointmentPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - Illustration + Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-indigo-700 leading-tight">
              Smart & Fair Appointment Booking
            </h1>

            <p className="text-gray-600 text-lg">
              Our intelligent scheduling system automatically assigns
              the doctor with the least workload to ensure fair
              distribution and faster service.
            </p>

            <img
              src="https://plus.unsplash.com/premium_photo-1661955607472-07eff10dafa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcG9pbnRtZW50JTIwYm9va2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Doctor consultation"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* RIGHT SIDE - Booking Form */}
          <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/50">
            
            <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
              Book Appointment
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Choose specialization and let the system assign the best available doctor.
            </p>

            <BookAppointment />

          </div>

        </div>
      </div>
    </>
  );
}