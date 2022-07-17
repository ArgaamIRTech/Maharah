import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./CorporateSector.css";
// Import Img
import img_1 from "../../../Assets/servicesSolutions/1.png";
import img_2 from "../../../Assets/servicesSolutions/2.png";
import img_3 from "../../../Assets/servicesSolutions/3.png";
import img_4 from "../../../Assets/servicesSolutions/4.png";
import img_5 from "../../../Assets/servicesSolutions/5.png";
import img_6 from "../../../Assets/servicesSolutions/6.png";

const CorporateSector = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="corporate-cector">
      <div className="h2">{t("servicesSolutions.section_title_3")}</div>
      <div className="h3 py-5">{t("servicesSolutions.section_title_4")}</div>

      <div className="row">
        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="manpower">
            <img src={img_1} alt="manpower img" />
            <p>{t("servicesSolutions.manpower_services_t_1")}</p>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="manpower">
            <img src={img_2} alt="manpower img" />
            <p>{t("servicesSolutions.manpower_services_t_2")}</p>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="manpower">
            <img src={img_3} alt="manpower img" />
            <p>{t("servicesSolutions.manpower_services_t_3")}</p>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="manpower">
            <img src={img_4} alt="manpower img" />
            <p>{t("servicesSolutions.manpower_services_t_4")}</p>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="manpower">
            <img src={img_5} alt="manpower img" />
            <p>{t("servicesSolutions.manpower_services_t_5")}</p>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="manpower">
            <img src={img_6} alt="manpower img" />
            <p>{t("servicesSolutions.manpower_services_t_6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateSector;
