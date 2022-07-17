import React from "react";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./Esnad.css";
// Import Img
import esnadImg from "../../../Assets/servicesSolutions/EsnadLogo.png";

const Esnad = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="esnad">
      <div className="h3" data-aos="zoom-in" data-aos-duration="2000">
        {t("servicesSolutions.esnadT")}
      </div>

      <div className="e-box" data-aos="zoom-in" data-aos-duration="2000">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid mb-4" src={esnadImg} alt="Esnad" />
          </div>

          <div className="col-md-7" data-aos="zoom-in" data-aos-duration="2000">
            <ul>
              <li>{t("servicesSolutions.esnad_l_1")}</li>
              <li>{t("servicesSolutions.esnad_l_2")}</li>
              <li>{t("servicesSolutions.esnad_l_3")}</li>
              <li>{t("servicesSolutions.esnad_l_4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esnad;
