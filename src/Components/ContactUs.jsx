import React from 'react';
import "../Style/All.css";
import "../Style/Responsive.css";
import blex7 from "../images/rigjt.jpg"

const ContactUs = () => {
  return (
    <section className="contact_section" style={{paddingTop:'44px'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-5 offset-md-1">
            <div className="heading_container">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5 offset-md-1">
            <div className="form_container contact-form">
              <form action="">
                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="btn_box">
                  <button style={{backgroundColor:'#04233b'}}>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
               <img src={blex7} alt="" className='contatct-img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
