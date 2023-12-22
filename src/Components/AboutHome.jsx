import React, { useEffect, useState } from "react";
import "../Style/All.css";
import aboutus from "../images/coupke.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import container from "../images/container_-_23759 (1080p).mp4"
const AboutHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <section className="slider_section" data-aos="fade-down"  style={{backgroundColor:'transparent',backgroundImage:'linear-gradient(0deg, rgb(69 86 108) 0%, rgb(5 12 21) 100%)'}}>
    <div className="slider_bg_box">

    </div>
    <div className="container" style={{width:'100%',display:'flex',maxWidth:'1920px',justifyContent:'end',minHeight:'600px'}}>
      {/* <div style={{width:"50%"}}></div> */}
            
      <div className="row">
        
          <div className="col-md-6" >
          <div className="about-home-text" style={{paddingLeft:'6rem',paddingRight:'6rem'}}>
          <div className="detail-box" >
              <div className="heading_container">
                <h2 style={{color:'white'}}>
                  About <span>System</span>
                </h2>
              </div>
              <p style={{color:'white',paddingTop:'1rem',fontFamily:'Montserrat',lineHeight:'33px',fontSize:'18px'}}>
                A study reveals that the typical sourcing person dedicates more
                than 60 working hours following the selection of a product from
                any B2B platform. This time encompasses activities such as
                manufacturing auditing, price negotiation, quality assurance,
                and several other crucial factors. When we proclaim, 'Our most
                valuable commodity is not money, but our time. We can always
                generate more money, but we cannot create more time,' it
                underscores the same core principle. We aim to conserve the
                valuable time of both buyers and sellers, providing them with a
                more targeted and efficient approach that maximizes their
                precious time.
              </p>
              <Link to="/about" className="Read-more-btn">Read More</Link>
            </div>
          </div>
           
          </div>
          <div className="col-md-6 " >
          <div className="about-home-video" style={{paddingRight:'2rem', paddingLeft:'2rem'}}>
          <div className="img-box">
            <video
  className="hero-video"
  autoPlay
  muted
  playsInline
  loop
  style={{ width: "100%", height: "100%",borderRadius:'14px',marginTop:'1rem' }}
>
  <source
    src={container}
    type="video/mp4"
  />
</video>
            </div>
           </div>
      
          </div>
        
        </div>
     
        </div>

  </section>
 
  );
};
export default AboutHome;
