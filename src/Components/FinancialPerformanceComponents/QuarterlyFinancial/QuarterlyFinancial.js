import React from "react";
import {
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Line,
} from "recharts";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./QuarterlyFinancial.css";

const QuarterlyFinancial = () => {
  // Import Use Translation
  const { t } = useTranslation();

  //Revenues
  const revenuesData = [
    {
      date: "Q1",
      2021: 322,
      2020: 390,
    },
    {
      date: "Q2",
      2021: 323,
      2020: 352,
    },
    {
      date: "Q3",
      2021: 325,
      2020: 342,
    },
    {
      date: "Q4",
      2021: 350,
      2020: 332,
    },
  ];

  // Gross Income
  const grossIncomeData = [
    {
      date: "Q1",
      2021: 55,
      2020: 79,
    },
    {
      date: "Q2",
      2021: 54,
      2020: 74,
    },
    {
      date: "Q3",
      2021: 54,
      2020: 63,
    },
    {
      date: "Q4",
      2021: 56,
      2020: 47,
    },
  ];

  // Net Income
  const netIncomeData = [
    {
      date: "Q1",
      2021: 31,
      2020: 57,
      "changes %": 5,
    },
    {
      date: "Q2",
      2021: 39,
      2020: 49,
      "changes %": 16,
    },
    {
      date: "Q3",
      2021: 36,
      2020: 48,
      "changes %": 15,
    },
    {
      date: "Q4",
      2021: 39,
      2020: 23,
      "changes %": 80,
    },
  ];

  return (
    <div
      className="quarterly-financial"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="h2">
        {t("financial_performance.quarterly_section_t_1")}
      </div>

      <div className="cust-box-shad">
        <h4> {t("financial_performance.quarterly_section_t_2")}</h4>
        {/* <h6 className="sar-title">
          {t("financial_performance.growth_rates_text")}
        </h6> */}

        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
            data={revenuesData}
            margin={{
              top: 40,
              right: 50,
              left: 40,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />

            <YAxis
              yAxisId={1}
              label={{ value: "Million Saudi Riyals", angle: -90, dx: -20 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Legend />

            <CartesianGrid strokeDasharray="0 3" />

            <Bar
              yAxisId={1}
              dataKey="2021"
              fill="#a98445"
              barSize={50}
              animationDuration={3000}
            >
              <LabelList dataKey="2021" position="top" />
            </Bar>

            <Bar
              yAxisId={1}
              dataKey="2020"
              fill="#000"
              barSize={50}
              animationDuration={3000}
            >
              <LabelList dataKey="2020" position="top" />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="cust-box-shad ">
        <h4> {t("financial_performance.quarterly_section_t_3")}</h4>
        {/* <h6 className="sar-title">
          {t("financial_performance.growth_rates_text")}
        </h6> */}

        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
            data={grossIncomeData}
            margin={{
              top: 40,
              right: 50,
              left: 40,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />

            <YAxis
              yAxisId={1}
              tickCount={6}
              axisLine={false}
              tickLine={false}
              label={{ value: "Million Saudi Riyals", angle: -90, dx: -20 }}
            />

            <Tooltip />

            <Legend />

            <CartesianGrid strokeDasharray="0 3" />

            <Bar
              yAxisId={1}
              dataKey="2021"
              fill="#a98445"
              barSize={50}
              animationDuration={3000}
            >
              <LabelList dataKey="2021" position="top" />
            </Bar>

            <Bar
              yAxisId={1}
              dataKey="2020"
              fill="#000"
              barSize={50}
              animationDuration={3000}
            >
              <LabelList dataKey="2020" position="top" />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="cust-box-shad">
        <h4> {t("financial_performance.quarterly_section_t_4")}</h4>
        {/* <h6 className="sar-title">
          {t("financial_performance.growth_rates_text")}
        </h6> */}

        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
            data={netIncomeData}
            margin={{
              top: 40,
              right: 50,
              left: 40,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />

            <YAxis
              yAxisId={1}
              label={{ value: "Million Saudi Riyals", angle: -90, dx: -20 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId={2}
              orientation="right"
              domain={[0, 5]}
              tickCount={6}
              // label={{ value: "Percentage %", angle: -90, dx: 20 }}
              tickFormatter={(tick) => `${tick}%`}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Legend />

            <CartesianGrid strokeDasharray="0 3" />

            <Bar
              yAxisId={1}
              dataKey="2021"
              fill="#a98445"
              barSize={50}
              animationDuration={3000}
            >
              <LabelList dataKey="2021" position="top" />
            </Bar>

            <Bar
              yAxisId={1}
              dataKey="2020"
              fill="#000"
              barSize={50}
              animationDuration={3000}
            >
              <LabelList dataKey="2020" position="top" />
            </Bar>

            <Line
              type="monotone"
              yAxisId={2}
              dataKey="changes %"
              stroke="#d8a115"
              strokeWidth={3}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuarterlyFinancial;
