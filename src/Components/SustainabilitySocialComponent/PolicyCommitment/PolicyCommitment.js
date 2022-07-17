import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./PolicyCommitment.css";

// Import Img Icons
import img_icon_1 from "../../../Assets/OperationalPerformance/imgIcon/1.png";
import img_icon_2 from "../../../Assets/OperationalPerformance/imgIcon/2.png";
import img_icon_3 from "../../../Assets/OperationalPerformance/imgIcon/3.png";
import img_icon_4 from "../../../Assets/OperationalPerformance/imgIcon/4.png";
import img_icon_5 from "../../../Assets/OperationalPerformance/imgIcon/5.png";
import img_icon_6 from "../../../Assets/OperationalPerformance/imgIcon/6.png";

const PolicyCommitment = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="policy-commitment">
      <div className="h3">{t("sustainability.policy_commitment_f_t")}</div>
      <p className="lead">{t("sustainability.policy_commitment_f_tx")}</p>

      <div className="competencies">
        <div className="row p-4">
          <div className="col-md-6">
            <div
              className="d-flex align-items-start box-competencies"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={img_icon_1} alt="icon" />
              <h5>{t("sustainability.policy_commitment_t_1")}</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="d-flex align-items-start box-competencies"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={img_icon_2} alt="icon" />
              <h5>{t("sustainability.policy_commitment_t_2")}</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="d-flex align-items-start box-competencies"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={img_icon_3} alt="icon" />
              <h5>{t("sustainability.policy_commitment_t_3")}</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="d-flex align-items-start box-competencies"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={img_icon_4} alt="icon" />
              <h5>{t("sustainability.policy_commitment_t_4")}</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="d-flex align-items-start box-competencies"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={img_icon_5} alt="icon" />
              <h5>{t("sustainability.policy_commitment_t_5")}</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="d-flex align-items-start box-competencies"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={img_icon_6} alt="icon" />
              <h5>{t("sustainability.policy_commitment_t_6")}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyCommitment;
