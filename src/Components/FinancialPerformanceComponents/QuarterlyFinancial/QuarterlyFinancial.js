import React from "react";
import { Chart } from "react-google-charts";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./QuarterlyFinancial.css";

const QuarterlyFinancial = () => {
  // Import Use Translation
  const { t } = useTranslation();

  //Revenues
  const data1 = [
    ["Q", "2021", "2020"],
    ["Q1", 322, 390],
    ["Q2", 323, 352],
    ["Q3", 325, 342],
    ["Q4", 350, 332],
  ];

  const optionsBar1 = {
    vAxis: {
      minValue: 100,
    },

    legend: { position: "bottom" },
    bar: { groupWidth: "40%" },
    seriesType: "bars",

    series: {
      0: {
        type: "bars",
        targetAxisIndex: 0,
        color: "#A98445",
      },
      1: {
        type: "bars",
        targetAxisIndex: 0,
        color: "#1A1818",
      },
    },
  };

  // Gross Income
  const data2 = [
    ["Q", "2021", "2020"],
    ["Q1", 55, 79],
    ["Q2", 54, 74],
    ["Q3", 54, 63],
    ["Q4", 56, 47],
  ];

  const optionsBar2 = {
    vAxis: {
      minValue: 100,
    },

    legend: { position: "bottom" },
    bar: { groupWidth: "40%" },
    seriesType: "bars",

    series: {
      0: {
        type: "bars",
        targetAxisIndex: 0,
        color: "#A98445",
      },
      1: {
        type: "bars",
        targetAxisIndex: 0,
        color: "#1A1818",
      },
    },
  };

  // Net Income
  const data3 = [
    ["Q", "2020", "2021", "change"],
    ["Q1", 31, 57, 5],
    ["Q2", 39, 49, 16],
    ["Q3", 36, 48, 15],
    ["Q4", 39, 23, 80],
  ];

  const optionsBar3 = {
    vAxis: {
      maxValue: 0,
    },

    legend: { position: "bottom" },
    bar: { groupWidth: "40%" },
    seriesType: "bars",
    series: {
      1: {
        type: "bars",
        targetAxisIndex: 0,
        color: "#1A1818",
      },
      0: {
        type: "bars",
        targetAxisIndex: 0,
        color: "#A98445",
      },
      2: {
        type: "line",
        targetAxisIndex: 1,
        color: "#D8A115",
      },
    },
  };

  return (
    <div
      className="quarterly-financial"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="h2">
        {t("financial_performance.quarterly_section_t_1")}
      </div>

      <div className="cust-box-shad" id="revenue">
        <h4> {t("financial_performance.quarterly_section_t_2")}</h4>
        <h6 className="sar-title">
          {t("financial_performance.growth_rates_text")}
        </h6>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={data1}
          options={optionsBar1}
        />
      </div>

      <div className="cust-box-shad " id="netincome">
        <h4> {t("financial_performance.quarterly_section_t_3")}</h4>
        <h6 className="sar-title">
          {t("financial_performance.growth_rates_text")}
        </h6>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={data2}
          options={optionsBar2}
        />
      </div>

      <div className="cust-box-shad" id="grossincome">
        <h4> {t("financial_performance.quarterly_section_t_4")}</h4>
        <h6 className="sar-title">
          {t("financial_performance.growth_rates_text")}
        </h6>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={data3}
          options={optionsBar3}
        />
      </div>
    </div>
  );
};

export default QuarterlyFinancial;
