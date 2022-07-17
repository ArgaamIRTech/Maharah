import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// Import use Translation
import { useTranslation } from "react-i18next";
import QuarterlyFinancial from "../Components/FinancialPerformanceComponents/QuarterlyFinancial/QuarterlyFinancial";
import GrowthRates from "../Components/FinancialPerformanceComponents/GrowthRates/GrowthRates";
import pdfImg from "../Assets/footer-pdf.png";
// Import Pdf
import financialPerformancePdf from "../Assets/pdf/En/FinancialPerformance.pdf";

const FinancialPerformance = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="financial-performance">
      <div className="container-fluid">
        <div
          className={i18n.language === "en" ? "main-title" : "main-title-ar"}
        >
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            {t("financial_performance.financial_performance_t_1")}
          </h1>
          <h5 data-aos="zoom-in" data-aos-duration="1500">
            {t("financial_performance.financial_performance_t_2")}
          </h5>
        </div>

        <div className="center-btn">
          <LinkScroll
            type="button"
            to="financial-section"
            className="custom-cunt-btn"
            smooth={true}
            offset={900}
            duration={200}
          >
            {t("performanceOverview.more")}
            <div>
              <i className="bi bi-arrow-down-short"></i>
            </div>
          </LinkScroll>
        </div>

        <div className="financial-section">
          <div className="h1">
            {t("financial_performance.financial_performance_t_3")}{" "}
            <span>{t("financial_performance.financial_performance_t_4")}</span>
          </div>

          {/* Components */}
          <QuarterlyFinancial />
          <GrowthRates />
        </div>
      </div>

      {/* Start Footer */}
      <div className="footer mt-5">
        <div className="f-div">
          <div className="d-flex align-items-center">
            <img src={pdfImg} alt="pdf Img" />
            <div className="edit-lh">
              <Link
                className="h2"
                to={financialPerformancePdf}
                target="_blank"
                download
              >
                {t("footer.section_1")}
              </Link>
              <p>{t("footer.dic_1")}</p>
            </div>
          </div>
        </div>
        <div className="s-div position-relative">
          <a className="h2" href="/DownloadCenter">
            {t("footer.section_2")}
            <i className="bi bi-caret-right-fill fs-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinancialPerformance;
