import Navbar from "../components/Navbar";
import AddDoctor from "../components/AddDoctor";

export default function AddDoctorPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 leading-tight">
              Join Our Smart Medical Network
            </h1>

            <p className="text-gray-600 text-lg">
              Add certified doctors and let our intelligent system manage
              appointments efficiently with smart workload balancing.
            </p>

            {/* Feature List */}
            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full text-2xl">
                  ⚖️
                </div>
                <p className="text-gray-700 font-medium">
                  Fair Workload Distribution
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-2xl">
                  ⚡
                </div>
                <p className="text-gray-700 font-medium">
                  Fast & Smart Appointment Allocation
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full text-2xl">
                  📈
                </div>
                <p className="text-gray-700 font-medium">
                  Real-Time Availability Monitoring
                </p>
              </div>

            </div>

            {/* Professional Image */}
            <div className="mt-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="Healthcare management"
                className="w-64 mx-auto md:mx-0 drop-shadow-xl"
              />
            </div>

          </div>

          {/* RIGHT SIDE FORM CARD */}
          <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100 hover:shadow-indigo-200 transition duration-300">

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-3xl">
                  🩺
                </div>
              </div>

              <h2 className="text-3xl font-bold text-indigo-700">
                Add New Doctor
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Enter doctor details to enable smart appointment scheduling
              </p>
            </div>

            <AddDoctor />

          </div>

        </div>
      </div>
    </>
  );
}