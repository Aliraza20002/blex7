import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/All.css';
import '../Style/Responsive.css';
import logo from '../images/logo.jpg';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../Context/LanguageContext'; // Replace with the actual path
import "./i18n"
const Topbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [visibleRight, setVisibleRight] = useState(false); // Define the state variable
  const { t, i18n } = useTranslation();
  const { toggleLanguage } = useLanguage();

  const handleNavLinkClick = (link) => {
    // Clear the active link when another link is clicked
    if (activeLink === link) {
      setActiveLink("");
    } else {
      setActiveLink(link);
    }
  };
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>Call : +8618026982970</span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>Email : info@blex7.com</span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <span>Location</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <NavLink to="/" exact className="navbar-brand">
              <img src={logo} alt="" style={{ width: "7rem" }} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className={`nav-link ${
                      activeLink === "home" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("home")}
                  >
                   {t("Home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={`nav-link ${
                      activeLink === "aboutus" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("aboutus")}
                  >
                        {t("How_Blex7_Works")}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contactus"
                    className={`nav-link ${
                      activeLink === "contactus" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("contactus")}
                  >
                  {t("Contact_Us")}
                  </NavLink>
                </li>
                <div className="flex gap-2 justify-content-center" style={{marginLeft:'15px'}}>
                <Button
                 icon={<FaBars />}
                  onClick={() => setVisibleRight(true)}
                />
              </div>
              </ul>

           

              <Sidebar
                visible={visibleRight}
                position="right"
                onHide={() => setVisibleRight(false)}
              >
                <h2>{t("Right Sidebar")}</h2>
                <p>
                <ul className="navbar-nav" style={{width:'76%'}}>
                <li className="nav-item" >
                  <NavLink
                    to="/"
                    exact
                    className={`nav-link ${
                      activeLink === "home" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("home")}
                    style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                  >
                  1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={`nav-link ${
                      activeLink === "aboutus" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("aboutus")}
                    style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                  >
                   2
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contactus"
                    className={`nav-link ${
                      activeLink === "contactus" ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick("contactus")}
                    style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                  >
                   3
                  </NavLink>
                </li>
         
              </ul>
              
              <div className="Langusages-button" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }} onClick={toggleLanguage}>
        Eng
      </button>
      <button style={{ border: '1px solid', borderRadius: '5px', padding: '10px' }} onClick={toggleLanguage}>
        Chi
      </button>
    </div>
                </p>
              </Sidebar>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
