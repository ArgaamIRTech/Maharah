import React from "react";
import { Chart } from "react-google-charts";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./TurnoverRate.css";

const TurnoverRate = () => {
  // Import Use Translation
  const { t } = useTranslation();

  // Bar Data
  const dataBar = [
    [
      "Year",
      "Perecent",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["2021", 14, "color: #A98445", "14%"],
    ["2018", 25, "color: #1A1818", "25%"],
  ];

  // Bar Option

  const optionsBar = {
    // title: "Turnover Rate",
    hAxis: {
      minValue: 40,
    },

    titleTextStyle: {
      color: "#D8A115",
    },

    animation: {
      duration: 4000,
      easing: "out",
      startup: true,
    },

    bars: "horizontal",
    bar: { groupWidth: "70%" },
    legend: { position: "none" },
    axes: {
      y: {
        0: { side: "right" },
      },
    },
  };

  return (
    <div className="turnover-rate">
      <h4>{t("operationalPerformanceP.turnover_rate_t")}</h4>

      <div data-aos="zoom-in" data-aos-duration="3000">
        <Chart
          chartType="BarChart"
          height="300px"
          data={dataBar}
          options={optionsBar}
        />
      </div>
    </div>
  );
};

export default TurnoverRate;
