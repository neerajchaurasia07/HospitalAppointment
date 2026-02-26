import { useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [specialization, setSpecialization] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBook = async (e) => {
    e.preventDefault();

    if (!specialization) {
      setOutput("Please enter specialization ⚠️");
      return;
    }

    try {
      setLoading(true);
      setOutput("");

      const res = await axios.post(
        "http://localhost:5000/api/doctors/book",
        { specialization }
      );

      setOutput(
        `✅ ${res.data.message} (Doctor ID: ${res.data.doctor.doctorId})`
      );
    } catch (error) {
      console.log("FULL ERROR:", error);

      // Safe error handling
      setOutput(
        error.response?.data?.message ||
          "❌ Server not reachable. Check backend."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Book Appointment</h2>

      <form onSubmit={handleBook}>
        <input
          type="text"
          placeholder="Enter Specialization (e.g. Cardiology)"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            background: loading ? "gray" : "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>

      {output && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            background:
              output.includes("✅") ? "#d4edda" : "#f8d7da",
            color:
              output.includes("✅") ? "#155724" : "#721c24",
          }}
        >
          {output}
        </div>
      )}
    </div>
  );
}

export default BookAppointment;