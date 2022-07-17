import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import pdfImg from "../Assets/footer-pdf.png";
// Import Pdf
import servicesSolutionsPdf from "../Assets/pdf/En/ServicesSolutions.pdf";

// Import use Translation
import { useTranslation } from "react-i18next";
import CorporateSector from "../Components/ServicesSolutionsComponents/CorporateSector/CorporateSector";
import MapSection from "../Components/ServicesSolutionsComponents/MapSection/MapSection";
import Esnad from "../Components/ServicesSolutionsComponents/Esnad/Esnad";
import IndividualsSector from "../Components/ServicesSolutionsComponents/IndividualsSector/IndividualsSector";
import MainActivities from "../Components/ServicesSolutionsComponents/MainActivities/MainActivities";
import AllValues from "../Components/ServicesSolutionsComponents/AllValues/AllValues";

const ServicesSolutions = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="services-solutions">
      <div className="services-sector">
        <div className="container-fluid">
          <div
            className={i18n.language === "en" ? "main-title" : "main-title-ar"}
          >
            <h1 data-aos="zoom-in" data-aos-duration="1500">
              {t("servicesSolutions.fTitle")}
            </h1>
          </div>

          <div className="center-btn">
            <LinkScroll
              type="button"
              to="services-move"
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

          {/* Start Strategic Reports */}
          <div className="services-move">
            <div className="h1">
              {t("servicesSolutions.section_title_1")}{" "}
              <span>{t("servicesSolutions.section_title_2")}</span>
            </div>

            {/* Components */}
            <CorporateSector />
            <MapSection />
            <Esnad />
            <IndividualsSector />
            <MainActivities />
            <AllValues />
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
                  to={servicesSolutionsPdf}
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
            <a className="h2" href="/OperationalPerformance">
              {t("footer.section_2")}
              <i className="bi bi-caret-right-fill fs-6"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSolutions;
