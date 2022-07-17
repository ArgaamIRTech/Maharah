import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style File
import "./OperationalModel.css";
// Import Img
import img_1 from "../../../Assets/report/Customers.png";
import img_2 from "../../../Assets/report/Channels.png";
import img_3 from "../../../Assets/report/CustomersOutreachUnits.png";

const OperationalModel = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="operational-model">
      <h2>{t("strategicReports.operational_model")}</h2>

      {/* Start Tabs */}
      <div
        className="ch-dis d-flex align-items-center justify-content-lg-between p-5 shadow-sm bg-light"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        {/* Buttons */}
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-customers-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-customers"
            type="button"
            role="tab"
            aria-controls="v-pills-customers"
            aria-selected="true"
          >
            <img src={img_1} alt="img icon" /> {t("strategicReports.customers")}
          </button>

          <button
            className="nav-link"
            id="v-pills-channels-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-channels"
            type="button"
            role="tab"
            aria-controls="v-pills-channels"
            aria-selected="false"
          >
            <img src={img_2} alt="img icon" /> {t("strategicReports.channels")}
          </button>

          <button
            className="nav-link"
            id="v-pills-outreach-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-outreach"
            type="button"
            role="tab"
            aria-controls="v-pills-outreach"
            aria-selected="false"
          >
            <img src={img_3} alt="img icon" /> {t("strategicReports.outreach")}
          </button>
        </div>

        {/* Body */}

        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-customers"
            role="tabpanel"
            aria-labelledby="v-pills-customers-tab"
            tabIndex="0"
          >
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.companies")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.government")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.vip")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.individuals")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.shareholders")}
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-channels"
            role="tabpanel"
            aria-labelledby="v-pills-channels-tab"
            tabIndex="0"
          >
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.sales")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.branchs")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.call_centers")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.e_channels")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.tadawul")}
            </p>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-outreach"
            role="tabpanel"
            aria-labelledby="v-pills-outreach-tab"
            tabIndex="0"
          >
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.corporate")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.administrative")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.project_management")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.manpower_services")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.logistics")}
            </p>
            <p>
              <i className="bi bi-circle-fill m-3"></i>{" "}
              {t("strategicReports.marketing")}
            </p>
          </div>
        </div>
      </div>
      {/* End Tabs */}
    </div>
  );
};

export default OperationalModel;
