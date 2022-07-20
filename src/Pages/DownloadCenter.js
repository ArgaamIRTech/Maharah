import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// Import use Translation
import { useTranslation } from "react-i18next";

// Import PDF EN
import FinancialPerformancePdf from "../Assets/pdf/En/FinancialPerformance.pdf";
import ManagementLettersPdf from "../Assets/pdf/En/ManagementLetters.pdf";
import OperationalPerformancePdf from "../Assets/pdf/En/OperationalPerformance.pdf";
import PerformanceOverviewPdf from "../Assets/pdf/En/PerformanceOverview.pdf";
import ServicesSolutionsPdf from "../Assets/pdf/En/ServicesSolutions.pdf";
import StrategicReportsPdf from "../Assets/pdf/En/StrategicReports.pdf";
import SustainabilitySocialImpactPdf from "../Assets/pdf/En/SustainabilitySocialImpact.pdf";

// Import PDF AR
import FinancialPerformanceArPdf from "../Assets/pdf/Ar/FinancialPerformanceAr.pdf";
import ManagementLettersArPdf from "../Assets/pdf/Ar/ManagementLettersAr.pdf";
import OperationalPerformanceArPdf from "../Assets/pdf/Ar/OperationalPerformanceAr.pdf";
import PerformanceOverviewArPdf from "../Assets/pdf/Ar/PerformanceOverviewAr.pdf";
import ServicesSolutionsArPdf from "../Assets/pdf/Ar/ServicesSolutionsAr.pdf";
import StrategicReportsArPdf from "../Assets/pdf/Ar/StrategicReportsAr.pdf";
import SustainabilitySocialArPdf from "../Assets/pdf/Ar/SustainabilitySocialAr.pdf";

// Pdf Footer Img
import pdfImg from "../Assets/footer-pdf.png";
// All PDF
import FullPdf from "../Assets/pdf/full/En.pdf";

const DownloadCenter = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="download-center">
      <div className="container-fluid">
        <div
          className={i18n.language === "en" ? "main-title" : "main-title-ar"}
        >
          <h1>{t("download_center.download_center_t_1")}</h1>
          <h5>{t("download_center.download_center_t_2")}</h5>
        </div>

        <div className="center-btn">
          <LinkScroll
            type="button"
            to="download-section"
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

        <div className="download-section">
          <div className="h1">
            {t("download_center.download_center_t_3")}
            {"  "}
            <span>{t("download_center.download_center_t_4")}</span>
          </div>

          {/* ////////////////////////////////////////////////////// */}

          {/* Start PDF Section En */}
          <div className={i18n.language === "ar" ? "d-n" : "cus-p-dow"}>
            <div className="row">
              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Financial Performance
                    </h5>
                    {/* Link */}
                    <Link to={FinancialPerformancePdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Management Letters
                    </h5>
                    {/* Link */}
                    <Link to={ManagementLettersPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Operational Performance
                    </h5>
                    {/* Link */}
                    <Link
                      to={OperationalPerformancePdf}
                      target="_blank"
                      download
                    >
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Performance Overview
                    </h5>
                    {/* Link */}
                    <Link to={PerformanceOverviewPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Services Solutions
                    </h5>
                    {/* Link */}
                    <Link to={ServicesSolutionsPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Strategic Reports
                    </h5>
                    {/* Link */}
                    <Link to={StrategicReportsPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      Sustainability SocialImpact
                    </h5>
                    {/* Link */}
                    <Link
                      to={SustainabilitySocialImpactPdf}
                      target="_blank"
                      download
                    >
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End PDF Section En */}

          {/* Start PDF Section AR */}
          <div className={i18n.language === "en" ? "d-n" : "cus-p-dow"}>
            <div className="row">
              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      الأداء المالي
                    </h5>
                    {/* Link */}
                    <Link
                      to={FinancialPerformanceArPdf}
                      target="_blank"
                      download
                    >
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      كلمة مجلس الإدارة
                    </h5>
                    {/* Link */}
                    <Link to={ManagementLettersArPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      أداؤنا التشغيلي
                    </h5>
                    {/* Link */}
                    <Link
                      to={OperationalPerformanceArPdf}
                      target="_blank"
                      download
                    >
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      نظرة عامة على الأداء
                    </h5>
                    {/* Link */}
                    <Link
                      to={PerformanceOverviewArPdf}
                      target="_blank"
                      download
                    >
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      الخــدمات والحــلول
                    </h5>
                    {/* Link */}
                    <Link to={ServicesSolutionsArPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      التقرير الاستراتيجي
                    </h5>
                    {/* Link */}
                    <Link to={StrategicReportsArPdf} target="_blank" download>
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div className="box-down">
                  <div className="down-info d-flex justify-content-between align-items-center">
                    <h5>
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                      الاستدامة والأثر الاجتماعي
                    </h5>
                    {/* Link */}
                    <Link
                      to={SustainabilitySocialArPdf}
                      target="_blank"
                      download
                    >
                      <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </Link>
                    {/* Link */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End PDF Section AR */}
        </div>
      </div>

      {/* Start Footer */}
      <div className="footer mt-5">
        <div className="f-div">
          <div className="d-flex align-items-center">
            <img src={pdfImg} alt="pdf Img" />
            <div className="edit-lh">
              <Link className="h2" to={FullPdf} target="_blank" download>
                {t("footer.section_1")}
              </Link>
              <p>Full Report</p>
            </div>
          </div>
        </div>
        <div className="s-div position-relative">
          <a className="h2" href="/">
            {t("footer.section_last_1")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCenter;
