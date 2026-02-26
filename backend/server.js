import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hospital Appointment API Running...");
});

app.use("/api/doctors", doctorRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);