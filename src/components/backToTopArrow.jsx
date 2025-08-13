import React from "react";
import "./backToTopArrow.css";
const BackToTopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="back-to-top"
      onClick={scrollToTop}
      style={{
        cursor: "pointer",
        zIndex: 1000,
        position: "fixed",
        bottom: "20px",
        // right: "20px",
        right: "100px" ,
        opacity: 0.7
      }}
    >

        <div id="backToTop" style={{ display: "block", opacity: 0.5 }}>
            <div class="verticalDownLine"></div>
            <div class="horiDownLine horiDownLine1"></div>
            <div class="horiDownLine horiDownLine2"></div>
        </div>
      {/* <img src="https://d35408cyocioye.cloudfront.net/new3/ic-back-to-top.svg" alt="Back to Top" /> */}

    </div>


   
  );
}

export default BackToTopArrow;