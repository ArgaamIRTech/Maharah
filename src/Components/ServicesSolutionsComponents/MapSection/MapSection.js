import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./MapSection.css";
// Import Img
import mapImg from "../../../Assets/servicesSolutions/map.png";

const MapSection = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="map-section">
      <div className="h3">{t("servicesSolutions.mapT")}</div>

      <div className="mab-box">
        <img className="img-fluid" src={mapImg} alt="Map" />
      </div>
    </div>
  );
};

export default MapSection;
