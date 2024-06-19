import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success("Logout successful");
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response?.data.message || "Logout failed");
    }
  };

  const handleUpdateNotification = async (patientId, notification) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/user/update/${patientId}`,
        { notification },
        { withCredentials: true }
      );
      document.getElementById("badge").style.display = "none";
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };
  const goToRegister = () => {
    navigateTo("/register");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <Link to={"/"} onClick={() => setShow(!show)}>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </Link>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
            <Link to={"https://coyousi.pythonanywhere.com"} target="_self" onClick={() => setShow(!show)}>
              Predict Disease
            </Link>
            {isAuthenticated ? (
              <Link to={"/UserPage"} onClick={() => handleUpdateNotification(user._id, false)}>
                <>
                  <div href="#" class="notification">
                    <IoMdNotifications />
                    {user.notification ? (
                      <div id="badge"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              </Link>
            ) : (
              <></>
            )}
          </div>
          <div className="user-info">
            {isAuthenticated ? (
              <>
                <span className="username">Hi {user.firstName}!</span>
                <button className="logoutBtn btn" onClick={handleLogout}>
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <button className="loginBtn btn" onClick={goToRegister}>
                  REGISTER
                </button>
                <button className="loginBtn btn" onClick={goToLogin}>
                  LOGIN
                </button>
              </>
            )}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;