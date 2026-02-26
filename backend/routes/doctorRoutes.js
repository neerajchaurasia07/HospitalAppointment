import express from "express";
import {
  addDoctor,
  getDoctors,
  bookAppointment,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post("/add", addDoctor);
router.get("/all", getDoctors);
router.post("/book", bookAppointment);

export default router;