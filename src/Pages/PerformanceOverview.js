import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
// Import use Translation
import { useTranslation } from "react-i18next";
import FinancialIndicators from "../Components/PerformanceOverviewComponents/FinancialIndicators/FinancialIndicators";
import OperationalPerformance from "../Components/PerformanceOverviewComponents/OperationalPerformance/OperationalPerformance";
// PDF Img
import pdfImg from "../Assets/footer-pdf.png";
// Import Pdf
import performanceOverview from "../Assets/pdf/En/PerformanceOverview.pdf";

const PerformanceOverview = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="performance-overview">
      <div className="container-fluid">
        <div
          className={i18n.language === "en" ? "main-title" : "main-title-ar"}
        >
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            {t("performanceOverview.fTitle")}
          </h1>
          <h5 data-aos="zoom-in" data-aos-duration="1500">
            {t("performanceOverview.sTitle")}
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

        {/* Start Financial Indicators */}
        <div className="financial-section">
          <div className="h1">
            {t("performanceOverview.fTestT")}{" "}
            <span>{t("performanceOverview.sTestT")}</span>
          </div>

          <div className="container-fluid">
            <FinancialIndicators />
            <OperationalPerformance />
          </div>
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
                to={performanceOverview}
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
          <a className="h2" href="/StrategicReports">
            {t("footer.section_2")}
            <i className="bi bi-caret-right-fill fs-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
