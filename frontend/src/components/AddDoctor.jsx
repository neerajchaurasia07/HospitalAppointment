import { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const [doctorId, setDoctorId] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [maxDailyPatients, setMaxDailyPatients] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/doctors/add", {
        doctorId,
        specialization,
        maxDailyPatients,
      });

      setOutput("Doctor Added Successfully ✅");
      setDoctorId("");
      setSpecialization("");
      setMaxDailyPatients("");
    } catch (error) {
      setOutput(error.response?.data?.message || "Error Occurred ❌");
    }

    setLoading(false);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Doctor ID */}
        <div className="relative">
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
            className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-white"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-indigo-600">
            Doctor ID
          </label>
        </div>

        {/* Specialization */}
        <div className="relative">
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
            className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-white"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-indigo-600">
            Specialization
          </label>
        </div>

        {/* Max Patients */}
        <div className="relative">
          <input
            type="number"
            value={maxDailyPatients}
            onChange={(e) => setMaxDailyPatients(e.target.value)}
            required
            className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition bg-white"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-indigo-600">
            Max Daily Patients
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-300 disabled:opacity-60"
        >
          {loading ? "Adding..." : "Add Doctor"}
        </button>
      </form>

      {/* Output Message */}
      {output && (
        <div
          className={`mt-6 text-center py-3 rounded-xl text-sm font-medium ${
            output.includes("Successfully")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {output}
        </div>
      )}
    </div>
  );
}

export default AddDoctor;