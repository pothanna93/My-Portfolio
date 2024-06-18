import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector("#scroll");

    if (this.scrollY >= 560) {
      scrollUp.classList.add("scrollup");
    } else {
      scrollUp.classList.remove("scrollup");
    }
  });

  return (
    <a href="#" className="scrollup" id="scroll">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollUp;
