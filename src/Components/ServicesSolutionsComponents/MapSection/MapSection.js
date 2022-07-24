import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./MapSection.css";
// Import Img
import mapImgEn from "../../../Assets/servicesSolutions/map.png";
import mapImgAr from "../../../Assets/servicesSolutions/mapAr.png";

const MapSection = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="map-section">
      <div className="h3">{t("servicesSolutions.mapT")}</div>

      <div className={i18n.language === "en" ? "mab-box" : "d-none"}>
        <img className="img-fluid" src={mapImgEn} alt="Map" />
      </div>

      <div className={i18n.language === "ar" ? "mab-box" : "d-none"}>
        <img className="img-fluid" src={mapImgAr} alt="Map" />
      </div>

      <div className={i18n.language === "en-US" ? "mab-box" : "d-none"}>
        <img className="img-fluid" src={mapImgEn} alt="Map" />
      </div>
    </div>
  );
};

export default MapSection;
