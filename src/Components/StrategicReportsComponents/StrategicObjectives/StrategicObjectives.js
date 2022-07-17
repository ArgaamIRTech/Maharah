import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./StrategicObjectives.css";

const StrategicObjectives = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="strategic-objectives">
      <div className="h2">{t("strategicReports.strategic_objectives_t_1")}</div>
      <h4>{t("strategicReports.strategic_objectives_t_2")}</h4>

      <div className="row">
        <div
          className="col-lg-3 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="obj-box">
            <h5>{t("strategicReports.strategic_objectives_b_t_1")}</h5>
            <ul>
              <li>{t("strategicReports.strategic_objectives_financial_1")}</li>
              <li>{t("strategicReports.strategic_objectives_financial_2")}</li>
              <li>{t("strategicReports.strategic_objectives_financial_3")}</li>
            </ul>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="obj-box">
            <h5>{t("strategicReports.strategic_objectives_b_t_2")}</h5>
            <ul>
              <li>{t("strategicReports.strategic_objectives_customers_1")}</li>
              <li>{t("strategicReports.strategic_objectives_customers_2")}</li>
            </ul>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="obj-box">
            <h5>{t("strategicReports.strategic_objectives_b_t_3")}</h5>
            <ul>
              <li>{t("strategicReports.strategic_objectives_internal_1")}</li>
              <li>{t("strategicReports.strategic_objectives_internal_2")}</li>
            </ul>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="obj-box">
            <h5>{t("strategicReports.strategic_objectives_b_t_4")}</h5>
            <ul>
              <li>{t("strategicReports.strategic_objectives_learning_1")}</li>
              <li>{t("strategicReports.strategic_objectives_learning_2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicObjectives;
