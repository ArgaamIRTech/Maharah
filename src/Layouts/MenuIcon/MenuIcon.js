import React, { useRef, useEffect } from "react";
/* Import Links Router */
import { NavLink } from "react-router-dom";
/* Import Custom Css File */
import "./MenuIcon.css";
// Import use Translation
import { useTranslation } from "react-i18next";

const MenuIcon = () => {
  // Hide Menu On Click To Links
  const collapseRef = useRef(null);
  const hideMneu = () => {
    // collapseRef.current.setAttribute("class", "modal-dialog modal");
    collapseRef(!collapseRef);
  };

  // Import Use Translation
  const { t, i18n } = useTranslation();

  // Handle Change Lang Fun
  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Save Value On Load Select
  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
        document.querySelector("html").style.direction = "rtl";
      } else {
        document.querySelector("html").style.direction = "ltr";
      }
    }
  }, [i18n.language]);

  return (
    <div className="menu-icon">
      <button
        className="cus-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#menuIcon"
      >
        <i className="bi bi-list cus-icon"></i>
      </button>

      {/* Add Btn Lang */}
      <select className="change-lang" onChange={handleChangeLang}>
        <option value="en" className="lang">
          English
        </option>
        <option value="ar" className="lang">
          عـربـي
        </option>
      </select>
      {/* Add Btn Lang */}

      <div
        className="modal fade"
        id="menuIcon"
        tabIndex="-1"
        aria-labelledby="menuIconLabel"
        aria-hidden="true"
        ref={collapseRef}
      >
        <div className="modal-dialog modal-fullscreen">
          {/* Full Menu Body */}
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex justify-content-center align-items-center">
              <div className="section-links">
                <NavLink
                  className="nav-link"
                  to="/ManagementLetters"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.managementLetters")}
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/PerformanceOverview"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.performanceOverview")}
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/StrategicReports"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.strategicReports")}
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/ServicesSolutions"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.servicesSolutions")}
                </NavLink>
              </div>

              <div className="section-links">
                <NavLink
                  className="nav-link"
                  to="/OperationalPerformance"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.operationalPerformance")}
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/SustainabilitySocial"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.sustainabilitySocial")}
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/FinancialPerformance"
                  onClick={hideMneu}
                >
                  <i className="bi bi-circle-fill"></i>
                  {t("header.financialPerformance")}
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/DownloadCenter"
                  onClick={hideMneu}
                >
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                  {t("header.downloadCenter")}
                </NavLink>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
