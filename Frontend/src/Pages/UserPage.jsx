
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const UserPage = () => {
  const { user, userAppointments } = useContext(Context);
  const [status, setStatus] = useState([]);

  for (var i = 0; i < userAppointments.length; i++) {
    if(userAppointments[i].statusUpdated === true) status.push(userAppointments[i])
  }

  const handleStatusUpdated = async (id, status, statusUpdated) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${id}`,
        { status, statusUpdated },
        { withCredentials: true }
      );
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  for (var i = 0; i < status.length; i++) {
    handleStatusUpdated(status[i]._id, status[i].status, false);
  }

  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h5>Notifications</h5>
          {(status.length > 0) && (user.notification === true) ? (
            <table>
              <thead>
                <tr>
                  <th>All Notifications</th>
                </tr>
              </thead>
              <tbody>
                {status.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>Status updated for patient "{`${appointment.firstName} ${appointment.lastName}`}". Appointment is {appointment.status}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No notifications available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
