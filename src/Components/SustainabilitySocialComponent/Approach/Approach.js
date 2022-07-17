import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./Approach.css";
// Import Img
import img_1 from "../../../Assets/SustainabilitySocial/1.png";
import img_2 from "../../../Assets/SustainabilitySocial/2.png";
import img_3 from "../../../Assets/SustainabilitySocial/3.png";

const Approach = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="approach">
      <div className="row">
        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
          <div className="card border-0">
            <img src={img_1} className="card-img-top" alt="cars img" />
            <div className="card-body">
              <h5 className="card-title">{t("sustainability.approach_t_1")}</h5>
              <p className="card-text">{t("sustainability.approach_tx_1")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
          <div className="card border-0">
            <img src={img_2} className="card-img-top" alt="cars img" />
            <div className="card-body">
              <h5 className="card-title">{t("sustainability.approach_t_2")}</h5>
              <p className="card-text">{t("sustainability.approach_tx_2")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
          <div className="card border-0">
            <img src={img_3} className="card-img-top" alt="cars img" />
            <div className="card-body">
              <h5 className="card-title">{t("sustainability.approach_t_3")}</h5>
              <p className="card-text">{t("sustainability.approach_tx_3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
