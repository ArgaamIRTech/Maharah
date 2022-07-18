import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./MapSection.css";
// Import Img
import mapImg from "../../../Assets/servicesSolutions/map.png";
import mapImgAr from "../../../Assets/servicesSolutions/mapAr.png";

const MapSection = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="map-section">
      <div className="h3">{t("servicesSolutions.mapT")}</div>

      {/* Map En */}
      <div className={i18n.language === "ar" ? "d-n" : "mab-box"}>
        <img className="img-fluid" src={mapImg} alt="Map" />
      </div>

      {/* Map Ar */}
      <div className={i18n.language === "en" ? "d-n" : "mab-box"}>
        <img className="img-fluid" src={mapImgAr} alt="Map" />
      </div>
    </div>
  );
};

export default MapSection;
