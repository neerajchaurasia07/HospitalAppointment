import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    doctorId: {
      type: String,
      required: true,
      unique: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    maxDailyPatients: {
      type: Number,
      required: true,
    },
    currentAppointments: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;