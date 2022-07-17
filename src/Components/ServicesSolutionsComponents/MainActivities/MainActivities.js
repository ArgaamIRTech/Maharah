import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Chart } from "react-google-charts";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./MainActivities.css";

// Data
export const data = [
  ["", ""],
  ["Individuals", 28],
  ["Retail  ", 16],
  ["Healthcare  ", 12],
  ["Esnad Sector ", 0.5],
  ["Industrial And Operational  ", 19.7],
  ["Hospitality  ", 14.3],
  ["Commercial  ", 8],
];

export const options = {
  title: "Revenues",
  width: "100%",
  height: "500px",
  pieHole: 0.6,
  // is3D: true,
  legend: "none",
  titlePosition: "none",
  slices: {
    0: { color: "#A98445" },
    1: { color: "#59676B" },

    3: { color: "#D3A734" },
    4: { color: "#414957" },

    5: { color: "#393736" },
    6: { color: "#C7C2AF" },

    7: { color: "#81543A" },
  },
  // animation: {
  //   duration: 1000,
  //   easing: "out",
  //   startup: true,
  // },
};

const MainActivities = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="main-activities">
      <div className="h2 mt-5">{t("servicesSolutions.mainActivities_t_1")}</div>

      <div
        className="row align-items-center p-3"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div
          className="col-lg-6 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h2>{t("servicesSolutions.mainActivities_t_2")}</h2>
          <h3>
            <CountUp
              start={0}
              end={1318.73}
              separator={","}
              decimals={2}
              duration={1}
            >
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start}>
                  <span ref={countUpRef}></span>
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </h3>
          <p>{t("servicesSolutions.mainActivities_t_3")}</p>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Chart chartType="PieChart" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MainActivities;
