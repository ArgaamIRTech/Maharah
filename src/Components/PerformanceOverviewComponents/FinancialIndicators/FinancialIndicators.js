import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Chart } from "react-google-charts";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style
import "./FinancialIndicators.css";
// Import Img
import icon_1 from "../../../Assets/performance/Individuals_Sector.png";
import icon_2 from "../../../Assets/performance/Corporate_Sector.png";

// Data
export const data = [
  ["", ""],
  ["Individuals Sector", 72],
  ["Corporate Sector ", 28],
];

export const options = {
  title: "Revenues",
  width: "100%",
  height: "100%",
  pieHole: 0.6,
  is3D: true,
  legend: "none",
  titlePosition: "none",
  slices: {
    0: { color: "#A98445" },
    1: { color: "#D8A115" },
  },
  // animation: {
  //   duration: 1000,
  //   easing: "out",
  //   startup: true,
  // },
};

const FinancialIndicators = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="financial-indicators">
      <div className="h2">{t("performanceOverview.financialT")}</div>
      <div className="row">
        {/* Col 1 */}
        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className="cust-section">
            <div className="row">
              <h2>{t("performanceOverview.financialT_1")}</h2>
              <div className="col-md-6">
                <div>
                  <h3>
                    <CountUp start={0} end={1.3} decimals={1} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_1")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <h3 className="def-color">
                    <CountUp start={0} end={25} suffix={"%"} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_2")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cust-section">
            <div className="row">
              <h2>{t("performanceOverview.financialT_2")}</h2>
              <div className="col-md-6">
                <div>
                  <h3>
                    <CountUp start={0} end={146.7} decimals={1} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_3")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <h3 className="def-color">
                    <CountUp start={0} end={97} suffix={"%"} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div
          className="col-sm-6"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className="cust-section">
            <div className="row">
              <h2>{t("performanceOverview.financialT_3")}</h2>
              <div className="col-md-6">
                <div>
                  <h3>
                    <CountUp start={0} end={1036} separator="," duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_5")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <h3 className="def-color">
                    <CountUp start={0} end={65} suffix={"%"} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_6")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cust-section">
            <div className="row">
              <h2>{t("performanceOverview.financialT_4")}</h2>
              <div className="col-md-6">
                <div>
                  <h3>
                    <CountUp start={0} end={144.9} decimals={1} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_7")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <h3 className="def-color">
                    <CountUp start={0} end={11} suffix={"%"} duration={1}>
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start}>
                          <span ref={countUpRef}></span>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h3>
                  <p>{t("performanceOverview.cT_8")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Revenues Section */}
      <div className="revenues-section shadow">
        <div className="row">
          <div
            className="col-md-4"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <Chart chartType="PieChart" data={data} options={options} />
          </div>
          <div
            className="col-md-8 mt-5 text-center"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <div className="rev-info d-flex justify-content-center">
              <div>
                <img src={icon_1} alt="Individuals_Sector" />
              </div>
              <div>
                <div className="h3">
                  <CountUp start={0} end={72} suffix={"%"} duration={1}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef}></span>
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>{t("performanceOverview.cT_9")}</p>
              </div>
            </div>
            <div className="rev-info d-flex justify-content-center">
              <div>
                <img src={icon_2} alt="Individuals_Sector" />
              </div>
              <div>
                <div className="h4">
                  <CountUp start={0} end={28} suffix={"%"} duration={1}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef}></span>
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>{t("performanceOverview.cT_0")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialIndicators;
