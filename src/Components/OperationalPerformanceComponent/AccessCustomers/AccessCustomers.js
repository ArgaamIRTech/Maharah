import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./AccessCustomers.css";
// Import Img
import img_1 from "../../../Assets/OperationalPerformance/Excellence.png";
import img_2 from "../../../Assets/OperationalPerformance/emarket.png";
import img_3 from "../../../Assets/OperationalPerformance/digital.png";

const AccessCustomers = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="access-customers">
      <div className="h3">{t("operationalPerformanceP.access_t_1")}</div>
      <div className="row">
        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
          <div className="d-flex align-items-center ch-bac">
            <img src={img_1} alt="img" />
            <h6>{t("operationalPerformanceP.access_t_2")}</h6>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
          <div className="d-flex align-items-center ch-bac">
            <img src={img_2} alt="img" />
            <h6>{t("operationalPerformanceP.access_t_3")}</h6>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
          <div className="d-flex align-items-center ch-bac">
            <img src={img_3} alt="img" />
            <h6>{t("operationalPerformanceP.access_t_4")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessCustomers;
