import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
// Import use Translation
import { useTranslation } from "react-i18next";
import pdfImg from "../Assets/footer-pdf.png";
// Import Pdf
import StrategicReportsPdf from "../Assets/pdf/En/StrategicReports.pdf";
// Import Components
import Vision from "../Components/StrategicReportsComponents/Vision/Vision";
import Path from "../Components/StrategicReportsComponents/Path/Path";
import Strategy from "../Components/StrategicReportsComponents/Strategy/Strategy";
import OperationalModel from "../Components/StrategicReportsComponents/OperationalModel/OperationalModel";
import DigitalTransformation from "../Components/StrategicReportsComponents/DigitalTransformation/DigitalTransformation";
import Acquisitions from "../Components/StrategicReportsComponents/Acquisitions/Acquisitions";
import StrategicHorizons from "../Components/StrategicReportsComponents/StrategicHorizons/StrategicHorizons";
import StrategicObjectives from "../Components/StrategicReportsComponents/StrategicObjectives/StrategicObjectives";
import StrategicPotentials from "../Components/StrategicReportsComponents/StrategicPotentials/StrategicPotentials";
import Subsidiaries from "../Components/StrategicReportsComponents/Subsidiaries/Subsidiaries";

const StrategicReports = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="strategic-reports">
      <div className="container-fluid">
        <div
          className={i18n.language === "en" ? "main-title" : "main-title-ar"}
        >
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            {t("strategicReports.fTitle")}
          </h1>
          <h5 data-aos="zoom-in" data-aos-duration="1500">
            {t("strategicReports.sTitle")}
          </h5>
        </div>
        <div className="center-btn">
          <LinkScroll
            type="button"
            to="report-section"
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

        {/* Start Strategic Reports */}

        <div className="report-section">
          <div className="h1">
            {t("strategicReports.section_title_1")}{" "}
            <span>{t("strategicReports.section_title_2")}</span>
          </div>
          <Vision />
          <Path />
          <Strategy />
          <OperationalModel />
          <DigitalTransformation />
          <Acquisitions />
          <StrategicHorizons />
          <StrategicObjectives />
          <StrategicPotentials />
          <Subsidiaries />
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
                to={StrategicReportsPdf}
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
          <a className="h2" href="/ServicesSolutions">
            {t("footer.section_2")}
            <i className="bi bi-caret-right-fill fs-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StrategicReports;
