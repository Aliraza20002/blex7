import React, { useEffect, useState } from "react";
import "../Style/All.css";
import aboutus from "../images/about-img.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../Context/LanguageContext'; // Replace with the actual path
import "./i18n"
const SliderText = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="about_section layout_padding-bottom" >

      <div className="container">
      <div className="slider-text">
      <div className="row" style={{paddingLeft:'100px',paddingRight:'92px',paddingTop:'57px'}}>

<div className="col-md-7" style={{width:'100%'}}>
  <div className="detail-box" style={{textAlign:'center'}}  data-aos="fade-down"
data-aos-easing="linear"
data-aos-duration="1500">
    <h1 style={{fontFamily:'auto'}} >
    {t("With_years_of_experience")}
    </h1>
    <p>
    {t("At_Blex7")}
    </p>

  </div>
</div>
</div>

      </div>

      </div>
    </section>
  );
};

export default SliderText;
