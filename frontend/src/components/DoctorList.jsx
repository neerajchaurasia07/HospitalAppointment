import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors/all")
      .then((res) => setDoctors(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-indigo-700">
            Our Doctors
          </h2>
          <p className="text-gray-500 mt-2">
            Smart workload distribution system
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-indigo-600 font-medium">
            Loading doctors...
          </div>
        )}

        {/* Empty State */}
        {!loading && doctors.length === 0 && (
          <div className="text-center bg-white p-10 rounded-2xl shadow-xl">
            <p className="text-gray-500 text-lg">
              No doctors available yet 🏥
            </p>
          </div>
        )}

        {/* Doctor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => {
            const isFull =
              doc.currentAppointments >= doc.maxDailyPatients;

            const percentage =
              (doc.currentAppointments / doc.maxDailyPatients) * 100;

            return (
              <div
                key={doc._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100"
              >
                {/* Top Section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full text-xl font-bold">
                    👩‍⚕️
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {doc.doctorId}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {doc.specialization}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      isFull
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {isFull ? "Fully Booked" : "Available"}
                  </span>
                </div>

                {/* Appointment Progress */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Appointments</span>
                    <span>
                      {doc.currentAppointments} /{" "}
                      {doc.maxDailyPatients}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        isFull
                          ? "bg-red-500"
                          : "bg-indigo-500"
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}