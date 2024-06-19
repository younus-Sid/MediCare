// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Notifications = () => {
//   const [patientId, setPatientId] = useState("");
//   const [status, setStatus] = useState([]);

//   const fetchAppointmentStatuses = async (patientId) => {
//     try {
//       console.log(patientId + " Younus");
//       const response = await axios.get(
//         `http://localhost:4000/api/v1/appointment/get/${patientId}`
//       );
//       console.log(response.data);
//       setStatus(response.data.status);
//     } catch (error) {
//       console.error("Error fetching appointment statuses:", error);
//     }
//   };






//   // const [notification, setNotification] = useState("");

//   // useEffect(() => {
//   //   const fetchAppointmentNotification = async () => {
//   //     try {
//   //       const { data } = await axios.get(
//   //         `http://localhost:4000/api/v1/appointment/${appointmentId}/notification`,
//   //         { withCredentials: true }
//   //       );
//   //       setNotification(data.notification);
//   //     } catch (error) {
//   //       toast.error("Failed to fetch notification");
//   //     }
//   //   };

//   //   fetchAppointmentNotification();
//   // }, [appointmentId]);

//   // return (
//   //   <div className="notification-bar">
//   //     {notification && (
//   //       <span className={`notification ${notification.toLowerCase()}`}>
//   //         {notification}
//   //       </span>
//   //     )}
//   //   </div>
//   // );
// };

// export default Notifications;



import React from "react";

const Notifications = ({ title }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Your all appointments are listed below.
          </p>
        </div>
      </div>
    </>
  );
};

export default Notifications;

