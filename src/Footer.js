import React from "react";
import one from "./Images/1.png";
import two from "./Images/2.png";
import three from "./Images/3.png";
import four from "./Images/4.png";
const Footer = () => {
  return (
    <footer>
      {" "}
      <div class="socialMedias mt-3 mb-3">
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={one} style={{ width: "30px", marginLeft: "20px" }} />
        </a>{" "}
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={two} style={{ width: "30px", marginLeft: "20px" }} />
        </a>
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={three} style={{ width: "30px", marginLeft: "20px" }} />
        </a>
        <a href="https://www.bscscan.com/" target="_blank">
          <img src={four} style={{ width: "30px", marginLeft: "20px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
