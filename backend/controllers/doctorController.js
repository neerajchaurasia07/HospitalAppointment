import Doctor from "../models/Doctor.js";

/* ➤ Add Doctor */
export const addDoctor = async (req, res) => {
  const { doctorId, specialization, maxDailyPatients } = req.body;

  if (!doctorId || !specialization || !maxDailyPatients) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingDoctor = await Doctor.findOne({ doctorId });
  if (existingDoctor) {
    return res.status(400).json({ message: "Doctor already exists" });
  }

  const doctor = await Doctor.create({
    doctorId,
    specialization,
    maxDailyPatients,
  });

  res.status(201).json(doctor);
};

/* ➤ Get All Doctors */
export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

/* ➤ Book Appointment */
export const bookAppointment = async (req, res) => {
  const { specialization } = req.body;

  if (!specialization) {
    return res.status(400).json({ message: "Specialization required" });
  }

  const doctors = await Doctor.find({
    specialization,
    $expr: { $lt: ["$currentAppointments", "$maxDailyPatients"] },
  }).sort({ currentAppointments: 1 });

  if (doctors.length === 0) {
    return res.status(400).json({
      message: "All doctors are fully booked",
    });
  }

  const selectedDoctor = doctors[0];

  selectedDoctor.currentAppointments += 1;
  await selectedDoctor.save();

  res.json({
    message: "Appointment booked successfully",
    doctor: selectedDoctor,
  });
};