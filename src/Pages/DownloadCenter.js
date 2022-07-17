import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// Import use Translation
import { useTranslation } from "react-i18next";

// Import PDF
import FinancialPerformancePdf from "../Assets/pdf/En/FinancialPerformance.pdf";
import ManagementLettersPdf from "../Assets/pdf/En/ManagementLetters.pdf";
import OperationalPerformancePdf from "../Assets/pdf/En/OperationalPerformance.pdf";
import PerformanceOverviewPdf from "../Assets/pdf/En/PerformanceOverview.pdf";
import ServicesSolutionsPdf from "../Assets/pdf/En/ServicesSolutions.pdf";
import StrategicReportsPdf from "../Assets/pdf/En/StrategicReports.pdf";
import SustainabilitySocialImpactPdf from "../Assets/pdf/En/SustainabilitySocialImpact.pdf";
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
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            {t("download_center.download_center_t_1")}
          </h1>
          <h5 data-aos="zoom-in" data-aos-duration="1500">
            {t("download_center.download_center_t_2")}
          </h5>
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

          {/* Start PDF Section */}

          <div className="cus-p-dow">
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

          {/* End PDF Section */}
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
            <i className="bi bi-caret-right-fill fs-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCenter;
