import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./Acquisitions.css";
import "../Path/Path.css";

// Import Img

import salis from "../../../Assets/report/salis.png";

const Acquisitions = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="acquisitions">
      <div className="h2">{t("strategicReports.acquisitions_t")}</div>

      <div
        className={
          i18n.language === "en" ? "spectra-support" : "spectra-support-ar"
        }
      ></div>

      <div className="path">
        {/* Title */}
        <div className="cus-bac-sec">
          <div className="cu-h1">
            <CountUp start={0} end={90} suffix={"%"} duration={1}>
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start}>
                  <span ref={countUpRef}></span>
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </div>
          <p className="fs-2">
            {t("strategicReports.acquisitions_ls_t_1")}{" "}
            {t("strategicReports.acquisitions_ls_t_2")}
          </p>
        </div>
        {/* Title */}
        <div className="container-lg">
          <ul className="timeline">
            {/* Li Right */}

            <li data-aos="zoom-in" data-aos-duration="1500">
              <div className="timeline-badge _9"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_dec_2020")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p>{t("strategicReports.acquisitions_dec_2020_d")}</p>
                </div>
              </div>
            </li>

            {/* Li Right */}
            <li
              className="timeline-inverted mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="timeline-badge _4"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_apr_2021")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p>{t("strategicReports.acquisitions_apr_2021_d")}</p>
                </div>
              </div>
            </li>

            {/* Li Left */}
            <li data-aos="zoom-in" data-aos-duration="1500">
              <div className="timeline-badge _9"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_jun_2021")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p> {t("strategicReports.acquisitions_jun_2021_d")}</p>
                </div>
              </div>
            </li>

            {/* Li Right */}
            <li
              className="timeline-inverted mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="timeline-badge _4"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_aug_2021")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p>{t("strategicReports.acquisitions_aug_2021_d")}</p>
                </div>
              </div>
            </li>

            {/* End */}
          </ul>
        </div>
      </div>

      {/* Last Path */}
      <div className="path last-path">
        {/* Title */}
        <div className="cus-bac-sec">
          <div className="cu-h1">
            <CountUp start={0} end={85} suffix={"%"} duration={1}>
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start}>
                  <span ref={countUpRef}></span>
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </div>

          <p className="fs-2">
            {t("strategicReports.acquisitions_path_t_1")}{" "}
            {t("strategicReports.acquisitions_path_t_2")}
          </p>
        </div>
        {/* Title */}

        <div className="container-lg">
          <ul className="timeline">
            {/* Li Left */}
            <li data-aos="zoom-in" data-aos-duration="1500"></li>

            {/* Li Left */}
            <li data-aos="zoom-in" data-aos-duration="1500">
              <div className="timeline-badge _4"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_path_September_1")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p> {t("strategicReports.acquisitions_path_September_2")}</p>
                </div>
              </div>
            </li>

            {/* Li Right */}
            <li
              className="timeline-inverted mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="timeline-badge _6"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_path_december_1")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p>{t("strategicReports.acquisitions_path_december_2")}</p>
                </div>
              </div>
            </li>

            {/* Li Left */}
            <li data-aos="zoom-in" data-aos-duration="1500">
              <div className="timeline-badge _2"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_path_january_1")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p> {t("strategicReports.acquisitions_path_january_2")}</p>
                </div>
              </div>
            </li>

            {/* Li Right */}
            <li
              className="timeline-inverted mb-4"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="timeline-badge _3"></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h5 className="timeline-title">
                    {t("strategicReports.acquisitions_path_lsjanuary_1")}
                  </h5>
                </div>
                <div className="timeline-body">
                  <p>{t("strategicReports.acquisitions_path_lsjanuary_2")}</p>
                </div>
              </div>
            </li>
            {/* End */}
          </ul>
        </div>
      </div>

      {/* Start Salis  */}
      <div className="salis">
        <div className="container-fluid">
          <div
            className="row align-items-center p-3"
            style={{ background: "rgb(221 221 221 / 16%)" }}
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="col-md-7">
              <div className="cu-h1">
                <CountUp start={0} end={40} suffix={"%"} duration={1}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <span ref={countUpRef}></span>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </div>
              <p>{t("strategicReports.salis_p")}</p>
              <div className="cus-h2">{t("strategicReports.salis_t")}</div>
            </div>
            <div className="col-md-5 mt-5 text-center">
              <img className="img-fluid" src={salis} alt="allis" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acquisitions;
