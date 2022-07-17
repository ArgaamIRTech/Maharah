import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
import "./edit.css";

const Talentdevelopment = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="talentd container-fluid">
      <div className="h3">
        {t("operationalPerformanceP.talentDevelopment_t_1")}
      </div>

      <div
        className=" d-flex justify-content-between flex-row"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div
          className="img-icon left-side me-3 row"
          style={{ backgroundColor: "transparent" }}
        ></div>
        <div
          className=" d-flex flex-row  right-side"
          style={{ backgroundColor: "transparent", color: "black !important" }}
        >
          <div className=" w-50 ">
            <div className="h3">2021</div>
          </div>

          <div className=" w-50">
            <div className="h3">2022</div>
          </div>
        </div>
      </div>

      <div
        className="first-col d-flex justify-content-between flex-row"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="img-icon left-side me-3 row">
          <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 bg-img"></div>
          <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12">
            {t("operationalPerformanceP.talentDevelopment_t_2")}
          </div>
        </div>
        <div className="second-col d-flex flex-row right-side">
          <span className="tr-shape"></span>

          <div className="info-1 w-50 h-100">
            <span className="me-3">16683</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_1")}</span>
          </div>

          <div className="info-2 w-50">
            <span className="me-3">986.5</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_1")}</span>
          </div>
        </div>
      </div>

      <div
        className="first-col d-flex justify-content-between flex-row"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="img-icon left-side me-3 row">
          <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 bg-sec-img"></div>
          <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12">
            {t("operationalPerformanceP.talentDevelopment_t_3")}
          </div>
        </div>
        <div className="second-col d-flex flex-row right-side">
          <span className="tr-shape"></span>

          <div className="info-1 w-50 h-100">
            <span className="me-3">174%</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_2")}</span>
          </div>

          <div className="info-2 w-50">
            <span className="me-3">80%</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_2")}</span>
          </div>
        </div>
      </div>

      <div
        className="first-col d-flex justify-content-between flex-row"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="img-icon left-side me-3 row">
          <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 bg-thrd-img"></div>
          <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12">
            {t("operationalPerformanceP.talentDevelopment_t_4")}
          </div>
        </div>
        <div className="second-col d-flex flex-row right-side">
          <span className="tr-shape"></span>

          <div className="info-1 w-50 h-100">
            <span className="me-3">1908</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_3")}</span>
          </div>

          <div className="info-2 w-50">
            <span className="me-3">233</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_3")}</span>
          </div>
        </div>
      </div>

      <div
        className="first-col d-flex justify-content-between flex-row"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="img-icon left-side me-3 row">
          <div className="col-6 col-md-4 col-lg-4 col-sm-12 col-12 bg-forth-img"></div>
          <div className="col-6 col-md-8 col-lg-8 col-sm-12 col-12">
            {t("operationalPerformanceP.talentDevelopment_t_5")}
          </div>
        </div>
        <div className="second-col d-flex flex-row right-side">
          <span className="tr-shape"></span>

          <div className="info-1 w-50 h-100">
            <span className="me-3">3763</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_1")}</span>
          </div>

          <div className="info-2 w-50">
            <span className="me-3">986.5</span>
            <span>{t("operationalPerformanceP.talentDevelopment_s_t_1")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talentdevelopment;
