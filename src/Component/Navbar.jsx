import {
  faBars,
  faChalkboardTeacher,
  faDashboard,
  faHistory,
  faRemove,
  faStethoscope,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToDashboard = () => {
    navigate("/Dashboard")
  }
  const goToKedokteran = () => {
    navigate("/Kedokteran")
  }
  const goToMasukPtn = () => {
    navigate("/MasukPtn")
  }
  const goToTeacher = () => {
    navigate("/Teacher")
  }
  const goToAlumni = () => {
    navigate("/Alumni")
  }

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={showSidebar}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faRemove} className="icon-close" />
              <div className="parent-title">
                <h3 className="title-sidebar">Matrix Indonesia</h3>
              </div>
            </li>
            <div className="parent-isi1" onClick={() => goToDashboard()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faDashboard} /> Dashboard
              </h4>
            </div>

            <div className="parent-isi2" onClick={() => goToKedokteran()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faStethoscope} /> Bimbel Kedokteran
              </h4>
            </div>

            <div className="parent-isi3" onClick={() => goToMasukPtn()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faUniversity} /> Masuk PTN
              </h4>
            </div>

            <div className="parent-isi4" onClick={() => goToTeacher()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faChalkboardTeacher} /> Our Teacher
              </h4>
            </div>

            <div className="parent-isi5" onClick={() => goToAlumni()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon icon={faHistory} /> Alumni Story
              </h4>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Navbar;
