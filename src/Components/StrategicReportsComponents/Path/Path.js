import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./Path.css";

const Path = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="path">
      <div className="h2">{t("strategicReports.path_t")}</div>
      <p className="lead">{t("strategicReports.path_d")}</p>

      <div className="container-lg">
        <ul className="timeline">
          {/* Li Left */}
          <li data-aos="zoom-in" data-aos-duration="1500">
            <div className="timeline-badge _1"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.feb_2013")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.feb_2013_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Right */}
          <li
            className="timeline-inverted"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="timeline-badge _2"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.may_2014")}
                </h5>
              </div>
              <div className="timeline-body">
                <p> {t("strategicReports.may_2014_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Left */}
          <li data-aos="zoom-in" data-aos-duration="1500">
            <div className="timeline-badge _3"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.feb_2015")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.feb_2015_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Right */}
          <li
            className="timeline-inverted"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="timeline-badge _4"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.dec_2016")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.dec_2016_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Left */}
          <li data-aos="zoom-in" data-aos-duration="1500">
            <div className="timeline-badge _5"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.may_2017")}
                </h5>
              </div>
              <div className="timeline-body">
                <p> {t("strategicReports.may_2017_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Right */}
          <li
            className="timeline-inverted"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="timeline-badge _6"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.sep_2017")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.sep_2017_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Left */}
          <li data-aos="zoom-in" data-aos-duration="1500">
            <div className="timeline-badge _7"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.nov_2018")}
                </h5>
              </div>
              <div className="timeline-body">
                <p> {t("strategicReports.nov_2018_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Right */}
          <li
            className="timeline-inverted"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="timeline-badge _8"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.dec_2018")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.dec_2018_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Left */}
          <li data-aos="zoom-in" data-aos-duration="1500">
            <div className="timeline-badge _9"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.mar_2019")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.mar_2019_t")}</p>
              </div>
            </div>
          </li>

          {/* Li Right */}
          <li
            className="timeline-inverted"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="timeline-badge _0"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h5 className="timeline-title">
                  {t("strategicReports.jun_2019")}
                </h5>
              </div>
              <div className="timeline-body">
                <p>{t("strategicReports.jun_2019_t")}</p>
              </div>
            </div>
          </li>
          {/* End */}
        </ul>
      </div>
    </div>
  );
};

export default Path;
