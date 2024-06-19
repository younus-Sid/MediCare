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

