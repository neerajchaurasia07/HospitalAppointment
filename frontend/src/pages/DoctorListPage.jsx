import Navbar from "../components/Navbar";
import DoctorList from "../components/DoctorList";

export default function DoctorListPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Available Doctors
          </h2>
          <DoctorList />
        </div>
      </div>
    </>
  );
}