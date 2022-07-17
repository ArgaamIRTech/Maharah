import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Img
import chairman from "../Assets/chairman.png";
import chiefExecutive from "../Assets/chiefExecutive.png";
import iconUser from "../Assets/Icon awesome-user-tie.png";
import pdfImg from "../Assets/footer-pdf.png";
// Import Pdf
import managementLettersPdf from "../Assets/pdf/En/ManagementLetters.pdf";

const ManagementLetters = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  return (
    <div className="management-letters">
      <div className="container-fluid">
        <div
          className={i18n.language === "en" ? "main-title" : "main-title-ar"}
        >
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            {t("managementLettersPage.fTitle")}
          </h1>
          <h5 data-aos="zoom-in" data-aos-duration="1500">
            {t("managementLettersPage.sTitle")}
          </h5>
          <LinkScroll
            type="button"
            className="letters-btn"
            to="chairman"
            smooth={true}
            offset={-350}
            duration={100}
          >
            {t("managementLettersPage.fBtn")}
            <div>
              <i className="bi bi-arrow-down-short"></i>
            </div>
          </LinkScroll>
          <LinkScroll
            type="button"
            className="letters-btn"
            to="chief"
            smooth={true}
            offset={-400}
            duration={100}
          >
            {t("managementLettersPage.sBtn")}
            <div>
              <i className="bi bi-arrow-down-short"></i>
            </div>
          </LinkScroll>
        </div>

        {/* Start Chairman Section */}
        <div className="chairman">
          <div
            className="row justify-content-lg-evenly custom-m"
            id="chairman"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <div className="col-lg-3 col-md-4 text-center">
              <h1 className="f-head fw-bolder">
                {t("managementLettersPage.chairman.chairman_1")}
              </h1>
              <h1 className="s-head fw-bolder">
                {t("managementLettersPage.chairman.chairman_2")}
              </h1>
              <img
                src={chairman}
                alt="chairman img"
                className="img-fluid mb-4"
              />
              <div className="custom-chairman-title">
                <img src={iconUser} alt="icon user" />
                <div>
                  <h6>{t("managementLettersPage.chairman.chairman_3")}</h6>
                  <small>
                    {t("managementLettersPage.chairman.chairman_4")}
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <p>{t("managementLettersPage.chairman.p_1")}</p>
              <p>{t("managementLettersPage.chairman.p_2")}</p>
              <p>{t("managementLettersPage.chairman.p_3")}</p>
              <p>{t("managementLettersPage.chairman.p_4")}</p>
              <p>{t("managementLettersPage.chairman.p_5")}</p>
              <p>{t("managementLettersPage.chairman.p_6")}</p>
              <p>{t("managementLettersPage.chairman.p_7")}</p>
            </div>
          </div>

          {/* Start Chief Executive Section */}
          <div
            className="row justify-content-lg-evenly"
            id="chief"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <div className="col-lg-3 col-md-4 text-center">
              <h1 className="f-head fw-bolder">
                {t("managementLettersPage.chief.chief_1")}
              </h1>
              <h1 className="s-head fw-bolder">
                {t("managementLettersPage.chief.chief_2")}
              </h1>
              <img
                src={chiefExecutive}
                alt="chairman img"
                className="img-fluid mb-4"
              />
              <div className="custom-chairman-title">
                <img src={iconUser} alt="icon user" />
                <div>
                  <h6>{t("managementLettersPage.chief.chief_3")}</h6>
                  <small>{t("managementLettersPage.chief.chief_4")}</small>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <p>{t("managementLettersPage.chief.p_1")}</p>
              <h3 className="fhief-small-t">
                {t("managementLettersPage.chief.title_1")}
              </h3>
              <p>{t("managementLettersPage.chief.p_2")}</p>
              <h3 className="fhief-small-t">
                {t("managementLettersPage.chief.title_2")}
              </h3>
              <p>{t("managementLettersPage.chief.p_3")}</p>
              <h3 className="fhief-small-t">
                {t("managementLettersPage.chief.title_3")}
              </h3>
              <p>{t("managementLettersPage.chief.p_4")}</p>
              <h3 className="fhief-small-t">
                {t("managementLettersPage.chief.title_4")}
              </h3>
              <p>{t("managementLettersPage.chief.p_5")}</p>
            </div>
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
                to={managementLettersPdf}
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
          <a className="h2" href="/PerformanceOverview">
            {t("footer.section_2")}
            <i className="bi bi-caret-right-fill fs-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManagementLetters;
