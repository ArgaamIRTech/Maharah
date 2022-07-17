import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Css Style File
import "./Subsidiaries.css";
// Import Img
import spectra_img_1 from "../../../Assets/report/associates/1.png";
import spectra_img_2 from "../../../Assets/report/associates/2.png";
import spectra_img_3 from "../../../Assets/report/associates/3.png";
import spectra_img_4 from "../../../Assets/report/associates/4.png";
import spectra_img_5 from "../../../Assets/report/associates/5.png";
import spectra_img_6 from "../../../Assets/report/associates/6.png";

import spectra_1 from "../../../Assets/report/associates/sp.png";
import spectra_2 from "../../../Assets/report/associates/sp2.png";
import spectra_3 from "../../../Assets/report/associates/sp3.png";
import spectra_4 from "../../../Assets/report/associates/sp4.png";
import spectra_5 from "../../../Assets/report/associates/sp5.png";
import spectra_6 from "../../../Assets/report/associates/sp6.png";

const Subsidiaries = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="subsidiaries">
      <div className="h2">Subsidiaries And Associates</div>

      {/* Start Tabs */}
      <div
        className="d-md-flex align-items-baseline"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div
          className="nav flex-row nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {/* Btn */}

          <button
            className="nav-link active"
            id="v-pills-section_1-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-section_1"
            type="button"
            role="tab"
            aria-controls="v-pills-section_1"
            aria-selected="true"
          >
            <img src={spectra_img_1} alt="tab img" />
            <div>{t("strategicReports.subsidiaries_t_1")}</div>
          </button>

          <button
            className="nav-link"
            id="v-pills-section_2-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-section_2"
            type="button"
            role="tab"
            aria-controls="v-pills-section_2"
            aria-selected="false"
          >
            <img src={spectra_img_2} alt="tab img" />
            <div>{t("strategicReports.subsidiaries_t_2")}</div>
          </button>

          <button
            className="nav-link"
            id="v-pills-section_3-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-section_3"
            type="button"
            role="tab"
            aria-controls="v-pills-section_3"
            aria-selected="false"
          >
            <img src={spectra_img_3} alt="tab img" />
            <div>{t("strategicReports.subsidiaries_t_3")}</div>
          </button>

          <button
            className="nav-link"
            id="v-pills-section_4-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-section_4"
            type="button"
            role="tab"
            aria-controls="v-pills-section_4"
            aria-selected="false"
          >
            <img src={spectra_img_4} alt="tab img" />
            <div>{t("strategicReports.subsidiaries_t_4")}</div>
          </button>

          <button
            className="nav-link"
            id="v-pills-section_5-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-section_5"
            type="button"
            role="tab"
            aria-controls="v-pills-section_5"
            aria-selected="false"
          >
            <img src={spectra_img_5} alt="tab img" />
            <div>{t("strategicReports.subsidiaries_t_5")}</div>
          </button>

          <button
            className="nav-link"
            id="v-pills-section_6-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-section_6"
            type="button"
            role="tab"
            aria-controls="v-pills-section_6"
            aria-selected="false"
          >
            <img src={spectra_img_6} alt="tab img" />
            <div>{t("strategicReports.subsidiaries_t_6")}</div>
          </button>
        </div>

        {/* Body */}

        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-section_1"
            role="tabpanel"
            aria-labelledby="v-pills-section_1-tab"
            tabIndex="0"
          >
            <div className="box-tab-info text-center mb-4">
              <h4>{t("strategicReports.spectra.spectra_t_1")}</h4>
              <div className="lead">
                {t("strategicReports.spectra.spectra_t_2")}
              </div>
              <p>{t("strategicReports.spectra.spectra_t_3")}</p>
              <img src={spectra_1} alt="spectra" />
            </div>

            <p>{t("strategicReports.spectra.spectra_d_1")}</p>
            <p>{t("strategicReports.spectra.spectra_d_2")}</p>
            <p>{t("strategicReports.spectra.spectra_d_3")}</p>
            <p>{t("strategicReports.spectra.spectra_d_4")}</p>
            <p>{t("strategicReports.spectra.spectra_d_5")}</p>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-section_2"
            role="tabpanel"
            aria-labelledby="v-pills-section_2-tab"
            tabIndex="0"
          >
            <div className="box-tab-info text-center mb-4">
              <h4>{t("strategicReports.gaic.gaic_t_1")}</h4>
              <div className="lead">{t("strategicReports.gaic.gaic_t_2")}</div>
              <p>{t("strategicReports.gaic.gaic_t_3")}</p>
              <img src={spectra_6} alt="tab img" />
            </div>

            <p>{t("strategicReports.gaic.gaic_d_1")}</p>
            <p>{t("strategicReports.gaic.gaic_d_2")}</p>
            <p>{t("strategicReports.gaic.gaic_d_3")}</p>
            <p>{t("strategicReports.gaic.gaic_d_4")}</p>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-section_3"
            role="tabpanel"
            aria-labelledby="v-pills-section_3-tab"
            tabIndex="0"
          >
            <div className="box-tab-info text-center mb-4">
              <h4>{t("strategicReports.nabd.nabd_t_1")}</h4>
              <div className="lead">{t("strategicReports.nabd.nabd_t_2")}</div>
              <p>{t("strategicReports.nabd.nabd_t_3")}</p>
              <img src={spectra_2} alt="spectra" />
            </div>
            <h6>{t("strategicReports.nabd.nabd_t_4")}</h6>
            <p>{t("strategicReports.nabd.nabd_d_1")}</p>
            <h6>{t("strategicReports.nabd.nabd_t_5")}</h6>
            <p>{t("strategicReports.nabd.nabd_d_2")}</p>
            <h6>{t("strategicReports.nabd.nabd_t_6")}</h6>
            <ul>
              <li>{t("strategicReports.nabd.nabd_d_3")}</li>
              <li>{t("strategicReports.nabd.nabd_d_4")}</li>
            </ul>
            <h6>{t("strategicReports.nabd.nabd_t_7")}</h6>
            <ul>
              <li>{t("strategicReports.nabd.nabd_d_5")}</li>
              <li>{t("strategicReports.nabd.nabd_d_6")}</li>
              <li>{t("strategicReports.nabd.nabd_d_7")}</li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-section_4"
            role="tabpanel"
            aria-labelledby="v-pills-section_4-tab"
            tabIndex="0"
          >
            <div className="box-tab-info text-center mb-4">
              <h4>{t("strategicReports.shifa.shifa_t_1")}</h4>
              <div className="lead">
                {t("strategicReports.shifa.shifa_t_2")}
              </div>
              <p>{t("strategicReports.shifa.shifa_t_3")}</p>
              <img src={spectra_3} alt="spectra" />
            </div>

            <p>{t("strategicReports.shifa.shifa_d_1")}</p>

            <h6>{t("strategicReports.shifa.shifa_t_4")}</h6>
            <p>{t("strategicReports.shifa.shifa_d_2")}</p>

            <h6>{t("strategicReports.shifa.shifa_t_5")}</h6>
            <p>{t("strategicReports.shifa.shifa_d_3")}</p>

            <h6>{t("strategicReports.shifa.shifa_t_6")}</h6>
            <ul>
              <li>{t("strategicReports.shifa.shifa_d_4")}</li>
              <li>{t("strategicReports.shifa.shifa_d_5")}</li>
              <li>{t("strategicReports.shifa.shifa_d_6")}</li>
              <li>{t("strategicReports.shifa.shifa_d_7")}</li>
              <li>{t("strategicReports.shifa.shifa_d_8")}</li>
              <li>{t("strategicReports.shifa.shifa_d_9")}</li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-section_5"
            role="tabpanel"
            aria-labelledby="v-pills-section_5-tab"
            tabIndex="0"
          >
            <div className="box-tab-info text-center mb-4">
              <h4>{t("strategicReports.tph.tph_t_1")}</h4>
              <div className="lead">{t("strategicReports.tph.tph_t_2")}</div>
              <p>{t("strategicReports.tph.tph_t_3")}</p>
              <img src={spectra_4} alt="spectra" />
            </div>

            <ul>
              <li>{t("strategicReports.tph.tph_d_1")}</li>
              <li>{t("strategicReports.tph.tph_d_2")}</li>
              <li>{t("strategicReports.tph.tph_d_3")}</li>
              <li>{t("strategicReports.tph.tph_d_4")}</li>
              <li>{t("strategicReports.tph.tph_d_5")}</li>
              <li>{t("strategicReports.tph.tph_d_6")}</li>
              <li>{t("strategicReports.tph.tph_d_7")}</li>
              <li>{t("strategicReports.tph.tph_d_8")}</li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-section_6"
            role="tabpanel"
            aria-labelledby="v-pills-section_6-tab"
            tabIndex="0"
          >
            <div className="box-tab-info text-center mb-4">
              <h4>{t("strategicReports.bloovo.bloovo_t_1")}</h4>
              <div className="lead">
                {t("strategicReports.bloovo.bloovo_t_2")}
              </div>
              <p>{t("strategicReports.bloovo.bloovo_t_3")}</p>
              <img src={spectra_5} alt="spectra" />
            </div>

            <p>{t("strategicReports.bloovo.bloovo_d_1")}</p>
          </div>
        </div>
      </div>
      {/* End Tabs */}
    </div>
  );
};

export default Subsidiaries;
