import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./IndividualsSector.css";
// Import Img
import icon_img_1 from "../../../Assets/servicesSolutions/md-home.png";
import icon_img_2 from "../../../Assets/servicesSolutions/timer.png";
import icon_img_3 from "../../../Assets/servicesSolutions/app.png";

const IndividualsSector = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="individuals-sector">
      <div className="h2">{t("servicesSolutions.individualsSector_t_1")}</div>
      <div className="row">
        <div className="col-lg-8 col-md-6 mt-5">
          <h4>{t("servicesSolutions.individualsSector_t_2")}</h4>
          <div
            className="individ-box d-flex align-items-center my-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src={icon_img_1} alt="icon img" />
            <div className="box-info">
              <h5 className="mb-2">
                {t("servicesSolutions.individualsSector_t_4")}
              </h5>
              <p className="m-0">
                {t("servicesSolutions.individualsSector_d_1")}
              </p>
            </div>
          </div>

          <div
            className="individ-box d-flex align-items-center my-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src={icon_img_2} alt="icon img" />
            <div className="box-info">
              <h5 className="mb-2">
                {t("servicesSolutions.individualsSector_t_5")}
              </h5>
              <p className="m-0">
                {t("servicesSolutions.individualsSector_d_2")}
              </p>
              <ul>
                <li> {t("servicesSolutions.individualsSector_d_3")}</li>
                <li> {t("servicesSolutions.individualsSector_d_4")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-5">
          <h4>{t("servicesSolutions.individualsSector_t_3")}</h4>
          <div
            className="khidma d-flex align-items-center mt-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div>
              <h2>
                +{" "}
                <CountUp start={0} end={500000} separator="," duration={1}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <span ref={countUpRef}></span>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <small> {t("servicesSolutions.individualsSector_d_5")}</small>
            </div>
            <img src={icon_img_3} alt="app" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualsSector;
