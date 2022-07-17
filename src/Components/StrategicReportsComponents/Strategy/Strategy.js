import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./Strategy.css";
// Import Img
import img_num_1 from "../../../Assets/report/fn.png";
import img_num_2 from "../../../Assets/report/sn.png";
import img_num_3 from "../../../Assets/report/tn.png";

const Strategy = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="strategy">
      <div className="h2">{t("strategicReports.strategy")}</div>
      <p className="lead">{t("strategicReports.strategy_d")}</p>
      <div className="py-5 h3">{t("strategicReports.strategy_pillars")}</div>

      <div className="row">
        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="strategy-pillars d-flex align-items-center">
            <div>
              <img src={img_num_1} alt="Num 1" />
            </div>
            <div>
              <h5>{t("strategicReports.enhancing_t")}</h5>
              <p>{t("strategicReports.enhancing_d")}</p>
            </div>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="strategy-pillars d-flex align-items-center">
            <div>
              <img src={img_num_2} alt="Num 2" />
            </div>
            <div>
              <h5>{t("strategicReports.developing_t")}</h5>
              <p>{t("strategicReports.developing_d")}</p>
            </div>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="strategy-pillars d-flex align-items-center">
            <div>
              <img src={img_num_3} alt="Num 3" />
            </div>
            <div>
              <h5>{t("strategicReports.searching_t")}</h5>
              <p>{t("strategicReports.searching_d")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
