import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./StrategicHorizons.css";
// Import Num Img
import num_1 from "../../../Assets/report/num/1.png";
import num_2 from "../../../Assets/report/num/2.png";
import num_3 from "../../../Assets/report/num/3.png";
import num_4 from "../../../Assets/report/num/4.png";
import num_5 from "../../../Assets/report/num/5.png";
import num_6 from "../../../Assets/report/num/6.png";
import num_7 from "../../../Assets/report/num/7.png";

const StrategicHorizons = () => {
  // Import Use Translation
  const { t } = useTranslation();
  return (
    <div className="strategic-horizons">
      <h2>{t("strategicReports.strategic_horizons_t")}</h2>

      <div className="row">
        <div className="col-md-6">
          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_1} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_1")}</p>
          </div>

          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_2} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_2")}</p>
          </div>

          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_3} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_3")}</p>
          </div>

          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_4} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_4")}</p>
          </div>
        </div>
        {/*  */}
        <div className="col-md-6">
          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_5} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_5")}</p>
          </div>

          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_6} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_6")}</p>
          </div>

          <div
            className="num-img  d-flex align-content-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={num_7} alt="numbers" />
            <p>{t("strategicReports.strategic_horizons_text_7")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicHorizons;
