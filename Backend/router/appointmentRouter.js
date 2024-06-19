import express from "express";
import {
  deleteAppointment,
  getAppointmentById,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.get("/get/:patientId", getAppointmentById)
router.put("/update/:id", updateAppointmentStatus);
router.delete("/delete/:id", deleteAppointment);

export default router;