import React from "react";
/* Import Logo */
import LogoImg from "../Assets/Logo.png";
// Import use Translation
import { useTranslation } from "react-i18next";

const Home = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="home-page">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            draggable="false"
            src={LogoImg}
            alt="Logo"
            className={i18n.language === "ar" ? "logo-ar" : ""}
          />
        </div>
        <div
          className={i18n.language === "en" ? "home-title" : "home-title-ar"}
          // data-aos="fade-up"
          // data-aos-duration="2000"
        >
          <h4>{t("title.annualReport")}</h4>
          <div className="h1">{t("title.exploring")}</div>
          <div className="h1">{t("title.prospects")}</div>
          <div className="h1">{t("title.future")}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
