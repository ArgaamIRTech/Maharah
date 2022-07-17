import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./Vision.css";
// Import Img
import img_1 from "../../../Assets/report/vision.png";
import img_2 from "../../../Assets/report/mission.png";
import img_3 from "../../../Assets/report/values.png";

const Vision = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="vision">
      <div className="row">
        <div
          className="col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div>
            <div className="card border-0 mb-4">
              <img
                src={img_1}
                className="card-img-top img-fluid"
                alt="mission"
              />
              <div className="card-body">
                <h5 className="card-title">{t("strategicReports.vision")}</h5>
                <p className="card-text">{t("strategicReports.vision_p")}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div>
            <div className="card border-0">
              <img
                src={img_2}
                className="card-img-top img-fluid"
                alt="mission"
              />
              <div className="card-body">
                <h5 className="card-title">{t("strategicReports.mission")}</h5>
                <p className="card-text">{t("strategicReports.mission_p")}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div>
            <div className="card border-0">
              <img
                src={img_3}
                className="card-img-top img-fluid"
                alt="mission"
              />
              <div className="card-body">
                <h5 className="card-title">{t("strategicReports.values")}</h5>
                <p className="card-text">{t("strategicReports.values_p")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
