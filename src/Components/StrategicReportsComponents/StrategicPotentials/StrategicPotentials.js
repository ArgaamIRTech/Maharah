import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./StrategicPotentials.css";
// Import Img
import potentials_1 from "../../../Assets/report/potentials/leadership-svgrepo-com.png";
import potentials_2 from "../../../Assets/report/potentials/XMLID_88_.png";
import potentials_3 from "../../../Assets/report/potentials/bank-financial-svgrepo-com.png";
import potentials_4 from "../../../Assets/report/potentials/code-svgrepo-com.png";
import potentials_5 from "../../../Assets/report/potentials/world-svgrepo-com.png";

const StrategicPotentials = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="strategic-potentials">
      <h4>{t("strategicReports.strategic_potentials_sec_t_6")}</h4>

      <div className="row" data-aos="zoom-in" data-aos-duration="1500">
        <div className="col-md-7">
          <div className="poten-box shadow-sm d-flex align-items-center p-4">
            <img src={potentials_1} alt="potentials_1" />
            <h5>{t("strategicReports.strategic_potentials_sec_t_1")}</h5>
          </div>
        </div>
        <div className="col-md-5">
          <div className="poten-box shadow-sm d-flex align-items-center p-4">
            <img src={potentials_2} alt="potentials_2" />
            <h5>{t("strategicReports.strategic_potentials_sec_t_2")}</h5>
          </div>
        </div>
      </div>

      <div className="row" data-aos="zoom-in" data-aos-duration="2000">
        <div className="col-md-4">
          <div className="poten-box shadow-sm d-flex align-items-center p-4">
            <img src={potentials_3} alt="potentials_3" />
            <h5>{t("strategicReports.strategic_potentials_sec_t_3")}</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="poten-box shadow-sm d-flex align-items-center p-4">
            <img src={potentials_4} alt="potentials_4" />
            <h5>{t("strategicReports.strategic_potentials_sec_t_4")}</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="poten-box shadow-sm d-flex align-items-center p-4">
            <img src={potentials_5} alt="potentials_5" />
            <h5>{t("strategicReports.strategic_potentials_sec_t_5")}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPotentials;
