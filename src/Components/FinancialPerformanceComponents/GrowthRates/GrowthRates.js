import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style
import "./GrowthRates.css";

const GrowthRates = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="growth-rates" data-aos="zoom-in" data-aos-duration="3000">
      <div className="h2">{t("financial_performance.growth_rates_t_1")}</div>

      <div className="row">
        <div className="col-sm-6">
          <div className="groth-box-1">
            <h5>{t("financial_performance.growth_rates_s_t_1")}</h5>
            <div className="h3">
              <CountUp start={0} end={1319} separator={","} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <div ref={countUpRef}></div>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
            <small>{t("financial_performance.growth_rates_text")}</small>
          </div>

          <div className="groth-box-1">
            <h5>{t("financial_performance.growth_rates_s_t_2")}</h5>
            <div className="h3">
              <CountUp start={0} end={147} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <div ref={countUpRef}></div>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
            <small>{t("financial_performance.growth_rates_text")}</small>
          </div>

          <div className="groth-box-1">
            <h5>{t("financial_performance.growth_rates_s_t_3")}</h5>
            <div className="h3">
              <CountUp start={0} end={14063} separator={"."} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
            <small>{t("financial_performance.growth_rates_text")}</small>
          </div>

          <div className="groth-box-1">
            <h5>{t("financial_performance.growth_rates_s_t_4")}</h5>
            <div className="h3">
              <CountUp
                start={0}
                end={17}
                suffix={"%"}
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
          </div>

          <div className="groth-box-1">
            <h5>{t("financial_performance.growth_rates_s_t_5")}</h5>
            <div className="h3">
              <CountUp
                start={0}
                end={19}
                suffix={"%"}
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
          </div>

          <div className="groth-box-1">
            <h5>{t("financial_performance.growth_rates_s_t_6")}</h5>
            <div className="h3">
              <CountUp start={0} end={0.24} decimals={2} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="groth-box-2">
            <h5>{t("financial_performance.growth_rates_s_t_7")}</h5>
            <div className="h3">
              <CountUp start={0} end={145} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
            <small>{t("financial_performance.growth_rates_text")}</small>
          </div>

          <div className="groth-box-2">
            <h5>{t("financial_performance.growth_rates_s_t_8")}</h5>
            <div className="h3">
              <CountUp start={0} end={28} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
            <small>{t("financial_performance.growth_rates_text")}</small>
          </div>

          <div className="groth-box-2">
            <h5>{t("financial_performance.growth_rates_s_t_9")}</h5>
            <div className="h3">
              <CountUp start={0} end={293} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
            <small>{t("financial_performance.growth_rates_text")}</small>
          </div>

          <div className="groth-box-2">
            <h5>{t("financial_performance.growth_rates_s_t_0")}</h5>
            <div className="h3">
              <CountUp
                start={0}
                end={11}
                suffix={"%"}
                decimals={0}
                duration={1}
              >
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
          </div>

          <div className="groth-box-2">
            <h5>{t("financial_performance.growth_rates_s_t_00")}</h5>
            <div className="h3">
              <CountUp start={0} end={1.78} decimals={2} duration={1}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start}>
                    <span ref={countUpRef}></span>
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthRates;
