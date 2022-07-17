import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Chart } from "react-google-charts";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./OurHuman.css";

// Import Img
import icon_1 from "../../../Assets/OperationalPerformance/saudis.png";
import icon_2 from "../../../Assets/OperationalPerformance/Non_ saudis.png";

// Data
export const data = [
  ["", ""],
  ["Nationalization Percentage", 80],
  ["Nationalization Percentage", 20],
];

export const options = {
  title: "Nationalization",
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

const OurHuman = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="our-human">
      <div className="h2">{t("operationalPerformanceP.op_title_5")}</div>

      {/* Start Revenues Section */}
      <div className="revenues-section shadow">
        <div className="row">
          <h4 className="p-5">{t("operationalPerformanceP.op_title_6")}</h4>
          <div className="col-md-4" data-aos="zoom-in" data-aos-duration="2000">
            <Chart chartType="PieChart" data={data} options={options} />
          </div>
          <div
            className="col-md-8 mt-5 text-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="rev-info d-flex justify-content-center">
              <div>
                <img src={icon_1} alt="Individuals_Sector" />
              </div>
              <div>
                <div className="h3">
                  <CountUp start={0} end={80} suffix={"%"} duration={1}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef}></span>
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>{t("operationalPerformanceP.op_title_7")}</p>
              </div>
            </div>
            <div className="rev-info d-flex justify-content-center">
              <div>
                <img src={icon_2} alt="Individuals_Sector" />
              </div>
              <div>
                <div className="h4">
                  <CountUp start={0} end={20} suffix={"%"} duration={1}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start}>
                        <span ref={countUpRef}></span>
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>{t("operationalPerformanceP.op_title_8")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHuman;
