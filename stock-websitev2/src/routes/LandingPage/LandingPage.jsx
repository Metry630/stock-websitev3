import React from "react";
import Phone from "../../images/LandingPage/phone.png"
import Instagram from "../../images/LandingPage/ig-icon.png"

const LandingPage = () => {
    return(
        <div class="content">
          <div class="text-box">
          <h1>Learn with us will be the<br />best choice for your<br />crypto!</h1>
          <p>Sebuah platform yang dibuat sebagai media pembelajaran<br />
          bagi seluruh kalangan mengenai cryptocurrency</p>
          <ul className="btn-items">
          <li class="btn">Download on <br />Windows</li>
          <li class="btn">Download on <br />Mac OS</li>
          </ul>
          <div class="bottom">
            <p>follow us on:</p>
            <img src={Instagram} class="ig" width={70} height={70} />
          </div>
          </div>
          <div class="image-box">
            <img src={Phone} class="phone" width={350} height={550} />
          </div>
        </div>
        
        );
    };
  
  export default LandingPage;