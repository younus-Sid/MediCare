import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";


const Appointment = () => {
  const { isAuthenticated, userAppointments } = useContext(Context);

  const deleteUserAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/appointment/delete/${id}`, {
        withCredentials: true,
      });
      toast.success("Appointment Deleted");
      document.getElementById(id).remove();
      var table = document.getElementById("appointmentTable");
      if (table.rows.length < 2) document.getElementById("appointmentTable").remove();
    } catch (error) {
      toast.error(error.response?.data.message || "Could not delete appointment");
    }
  };

  return (
    <>
      <Hero
        title={
          "Schedule Your Appointment | MediCare Care For Better Health"
        }
        imageUrl={"/appointment.png"}
      />
      {isAuthenticated ?
      <div className="hero container">
        <div className="banner">
          <h2>My Appointments</h2>
          {userAppointments.length > 0 ? (
            <table id="appointmentTable">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Apptmnt Date</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {userAppointments.map((appointment) => (
                  <tr key={appointment._id} id={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td className={
                      appointment.status === "Pending" ? "value-pending"
                        : appointment.status === "Accepted" ? "value-accepted" : "value-rejected"
                    }>{appointment.status}</td>
                    <td><button className="red-btn btn" onClick={() => deleteUserAppointment(appointment._id)}>
                      DELETE
                    </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No appointments yet.</p>
          )}
        </div>
      </div>
      : <></> }
      <AppointmentForm />
    </>
  );
};

export default Appointment;
