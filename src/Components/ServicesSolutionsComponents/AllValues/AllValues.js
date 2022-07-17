import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
// Import use Translation
import { useTranslation } from "react-i18next";
// Import Style Css
import "./AllValues.css";
// Import Img
import icon_img_1 from "../../../Assets/servicesSolutions/line/1.png";
import icon_img_2 from "../../../Assets/servicesSolutions/line/2.png";
import icon_img_3 from "../../../Assets/servicesSolutions/line/3.png";
import icon_img_4 from "../../../Assets/servicesSolutions/line/4.png";
import icon_img_5 from "../../../Assets/servicesSolutions/line/5.png";
import icon_img_6 from "../../../Assets/servicesSolutions/line/6.png";
import icon_img_7 from "../../../Assets/servicesSolutions/line/7.png";

const AllValues = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="all-values">
      <p className="text-center lead">
        {t("servicesSolutions.allValues_text")}
      </p>

      <div className="row mt-5 align-items-center">
        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div
            className="values-box d-flex align-items-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src={icon_img_1} alt="icon" />
            <div data-aos="zoom-in" data-aos-duration="2000">
              <h5>{t("servicesSolutions.allValues_t_1")}</h5>
              <h3 className="d-inline-block">
                <CountUp start={0} end={374.59} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>28.4%</span>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div className="values-box d-flex align-items-center">
            <img src={icon_img_5} alt="icon" />
            <div>
              <h5>{t("servicesSolutions.allValues_t_2")}</h5>

              <h3 className="d-inline-block">
                <CountUp start={0} end={259.81} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>19.7%</span>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div className="values-box d-flex align-items-center">
            <img src={icon_img_2} alt="icon" />
            <div>
              <h5>{t("servicesSolutions.allValues_t_3")}</h5>
              <h3 className="d-inline-block">
                <CountUp start={0} end={213.48} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>16.2%</span>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div className="values-box d-flex align-items-center">
            <img src={icon_img_6} alt="icon" />
            <div>
              <h5>{t("servicesSolutions.allValues_t_4")}</h5>
              <h3 className="d-inline-block">
                <CountUp start={0} end={189.21} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>14.3%</span>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div className="values-box d-flex align-items-center">
            <img src={icon_img_3} alt="icon" />
            <div>
              <h5>{t("servicesSolutions.allValues_t_5")}</h5>
              <h3 className="d-inline-block">
                <CountUp start={0} end={170.15} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>12.9%</span>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div className="values-box d-flex align-items-center">
            <img src={icon_img_7} alt="icon" />
            <div>
              <h5>{t("servicesSolutions.allValues_t_6")}</h5>
              <h3 className="d-inline-block">
                <CountUp start={0} end={105.03} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>8.0%</span>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
          <div className="values-box d-flex align-items-center">
            <img src={icon_img_4} alt="icon" />
            <div>
              <h5>{t("servicesSolutions.allValues_t_7")}</h5>
              <h3 className="d-inline-block">
                <CountUp start={0} end={6.44} decimals={2} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <div ref={countUpRef}></div>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <span>0.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllValues;
