import React, { useState } from "react";
import "../Style/All.css";
import aboutus from "../images/about-img.jpg";

const Aboutus = () => {
  const [showFullContent, setShowFullContent] = useState(true); // Set to true initially

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <section className="about_section layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About <span>System</span>
                </h2>
              </div>
              <p>
                {showFullContent
                  ? "A study reveals that the typical sourcing person dedicates more than 60 working hours following the selection of a product from any B2B platform. This time encompasses activities such as manufacturing auditing, price negotiation, quality assurance, and several other crucial factors. When we proclaim, 'Our most valuable commodity is not money, but our time. We can always generate more money, but we cannot create more time,' it underscores the same core principle. We aim to conserve the valuable time of both buyers and sellers, providing them with a more targeted and efficient approach that maximizes their precious time. Blex7 is well-equipped with essential networks, infrastructure, personnel, and resources to secure the most advantageous opportunities within the Chinese market on your behalf. We have implemented our state-of-the-art AI Procurement system, meticulously designed to optimize the sourcing process from China, whether it's for a single unit or large-scale production of your brand. Our system seamlessly integrates with an extensive network of reputable manufacturers, with our manufacturer auditors conducting rigorous assessments of their production capabilities and supply capacity before granting them access to our platform. Through the Blex7 system, you gain real-time visibility of the entire process, accessible from your computer or mobile device. You can monitor your order status and production progress, ensuring a 99.99% error-free product and on-time delivery. This exclusive access to a niche market, unavailable on platforms such as Alibaba.com and 1688.com, empowers your business with unparalleled opportunities. Blex7 is closely connected to an extensive network of logistics, shipping, and customs clearance companies, guaranteeing precise quotations for your shipping and customs clearance procedures."
                  : "A study reveals that the typical sourcing person dedicates more than 60 working hours following the selection of a product from any B2B platform. This time encompasses activities such as manufacturing auditing, price negotiation, quality assurance, and several other crucial factors. When we proclaim, 'Our most valuable commodity is not money, but our time. We can always generate more money, but we cannot create more time,' it underscores the same core principle. We aim to conserve the valuable time of both buyers and sellers, providing them with a more targeted and efficient approach that maximizes their precious time."}
              </p>
              <a href="#" onClick={handleReadMoreClick} style={{backgroundColor:'#04233b'}}>
                {showFullContent ? "Read Less" : "Read More"}
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={aboutus} alt="" />
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Aboutus;
