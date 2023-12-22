import React, { useEffect } from 'react';
import "../Style/All.css";
import "../Style/Responsive.css";
import Register from "../images/Register.png";
import submit from "../images/Submit.png";
import Money from "../images/money.png";
import Tracking from "../images/trackable.png";
import support from "../images/support.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="service_section layout_padding" data-aos="fade-right">
      <div className="service_container">
        <div className="container">
          <div className="heading_container">
            <h2>
              Steps <span>Guidelines</span>
            </h2>
            <p>
              Register with Blex7 Systems, it's simple.
            </p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-6" key={index} style={{ marginLeft: index % 2 === 1 ? '0' : '' }}>
                <div className="box">
                  <div className="img-box">
                    <img src={service.image} alt="" />
                  </div>
                  <div className="detail-box text-center">
                    <h5>{service.title}</h5>
                    <p>
                      {service.fullContent}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Register",
    fullContent: "Register with Blex7 Systems, it's simple.",
    image: Register,
  },
  {
    title: "Submit",
    fullContent: "Submit a purchase inquiry by Blex7 account, our machine learning technology will perform a detailed analysis, select the right supplier, and send the quotation for your approval.",
    image: submit,
  },
  {
    title: "Pay",
    fullContent: "Pay as per the inquiry.",
    image: Money,
  },
  {
    title: "Trackable production",
    fullContent: "Trackable production process, every step of production makes sure that the quality of the product is as per your quality parameters.",
    image: Tracking,
  },
  {
    title: "Final quality and quantity",
    fullContent: "Final quality and quantity inspection, shipments, all documents including BL, packing list, and commercial invoice within a single click. Bounce option: Quotations from Customs clearance agents at the port of discharge and shipping quotations from shipping companies on a single click.",
    image: Tracking,
  },
  {
    title: "24/7 Support",
    fullContent: "Experience unparalleled peace of mind with our round-the-clock 24/7 support. Our dedicated team is here to assist you at any hour, ensuring that your needs are met promptly and efficiently.",
    image: support,
  },
];

export default Service;
