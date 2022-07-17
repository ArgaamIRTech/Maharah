import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// Import use Translation
import { useTranslation } from "react-i18next";
import OurHuman from "../Components/OperationalPerformanceComponent/OurHuman/OurHuman";
import Competencies from "../Components/OperationalPerformanceComponent/Competencies/Competencies";

import Talentdevelopment from "../Components/OperationalPerformanceComponent/Talent/Talentdevelopment";
import AccessCustomers from "../Components/OperationalPerformanceComponent/AccessCustomers/AccessCustomers";

import pdfImg from "../Assets/footer-pdf.png";
// Import Pdf
import OperationalPerformancePdf from "../Assets/pdf/En/OperationalPerformance.pdf";
import TurnoverRate from "../Components/OperationalPerformanceComponent/NationalizationPercentage/TurnoverRate";

const OperationalPerformance = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="operation-performance">
      <div className="op-section">
        <div className="container-fluid">
          <div
            className={i18n.language === "en" ? "main-title" : "main-title-ar"}
          >
            <h1 data-aos="zoom-in" data-aos-duration="1500">
              {t("operationalPerformanceP.op_title_1")}
            </h1>
            <h5 data-aos="zoom-in" data-aos-duration="1500">
              {t("operationalPerformanceP.op_title_2")}
            </h5>
          </div>

          <div className="center-btn">
            <LinkScroll
              type="button"
              to="our-human"
              className="custom-cunt-btn"
              smooth={true}
              offset={-50}
              duration={200}
            >
              {t("performanceOverview.more")}
              <div>
                <i className="bi bi-arrow-down-short"></i>
              </div>
            </LinkScroll>
          </div>

          {/* Start Our Human */}
          <div className="our-human">
            <div className="h1">
              {t("operationalPerformanceP.op_title_3")}{" "}
              <span>{t("operationalPerformanceP.op_title_4")}</span>
            </div>

            <OurHuman />
            <TurnoverRate />
            <Competencies />
            <Talentdevelopment />
            <AccessCustomers />
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
                  to={OperationalPerformancePdf}
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
            <a className="h2" href="/SustainabilitySocial">
              {t("footer.section_2")}
              <i className="bi bi-caret-right-fill fs-6"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalPerformance;
