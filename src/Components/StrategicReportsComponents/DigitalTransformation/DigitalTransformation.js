import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./DigitalTransformation.css";
// Import Img
import dots_1 from "../../../Assets/report/dots/1.png";
import dots_2 from "../../../Assets/report/dots/2.png";
import dots_3 from "../../../Assets/report/dots/3.png";
import dots_4 from "../../../Assets/report/dots/4.png";

import dots_5 from "../../../Assets/report/dots/5.png";
import dots_6 from "../../../Assets/report/dots/6.png";
import dots_7 from "../../../Assets/report/dots/7.png";
import dots_8 from "../../../Assets/report/dots/8.png";

import last_Sec from "../../../Assets/report/Image.png";

const DigitalTransformation = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="digital-transformation">
      <div className="h2">{t("strategicReports.digital_t")}</div>
      <p className="lead">{t("strategicReports.digital_d")}</p>

      <div className="row align-items-center">
        <div className="col-md-6 def-p">
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_1} alt="dots" />
            {t("strategicReports.digital_s_t_1")}
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_2} alt="dots" />
            {t("strategicReports.digital_s_t_2")}
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_3} alt="dots" />
            {t("strategicReports.digital_s_t_3")}
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_4} alt="dots" />
            {t("strategicReports.digital_s_t_4")}
          </p>
        </div>

        <div className="col-md-6 def-p">
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_5} alt="dots" />
            {t("strategicReports.digital_s_t_5")}
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_6} alt="dots" />
            {t("strategicReports.digital_s_t_6")}
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_7} alt="dots" />
            {t("strategicReports.digital_s_t_7")}
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            <img className="m-3" src={dots_8} alt="dots" />
            {t("strategicReports.digital_s_t_8")}
          </p>
        </div>
      </div>

      {/* Start Last Section */}
      <div className="row pt-5 align-items-center">
        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="1500">
          <img src={last_Sec} alt="last_Sec" className="img-fluid" />
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="1500">
          <ul>
            <li>{t("strategicReports.digital_p_d_1")}</li>
            <li>{t("strategicReports.digital_p_d_2")}</li>
            <li>{t("strategicReports.digital_p_d_3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation;
