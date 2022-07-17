import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css File
import "./OperationalPerformance.css";

const OperationalPerformance = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="operational-performance">
      <div className="h2">{t("performanceOverview.operational_t")}</div>

      <div className="row px-5">
        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="all-h h_color_1">
              <CountUp start={0} end={900} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <p className="cl-p">{t("performanceOverview.operational_t_1")}</p>
          </div>
        </div>

        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="all-h h_color_2">
              <CountUp
                start={0}
                end={90000}
                separator=","
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <p className="cl-p">{t("performanceOverview.operational_t_2")}</p>
          </div>
        </div>

        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="all-h h_color_3">
              <CountUp
                start={0}
                end={160000}
                separator=","
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <p className="cl-p">{t("performanceOverview.operational_t_3")}</p>
          </div>
        </div>

        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="all-h h_color_4">
              <CountUp start={0} end={22} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <p className="cl-p">{t("performanceOverview.operational_t_4")}</p>
          </div>
        </div>

        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="all-h h_color_5">
              <CountUp
                start={0}
                end={120000}
                separator=","
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <p className="cl-p">{t("performanceOverview.operational_t_5")}</p>
          </div>
        </div>

        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="mb-5">
            <h1 className="all-h h_color_6">
              <CountUp
                start={0}
                end={50000}
                separator=","
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <p className="cl-p">{t("performanceOverview.operational_t_6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalPerformance;
