import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './LearningResources.css';
//import { Beginner, Advanced} from './ResData';

import beginner_1 from "../../images/LearningResources/beginner_1.jpg"
import beginner_2 from "../../images/LearningResources/beginner_2.jpg"
import beginner_3 from "../../images/LearningResources/beginner_3.jpg"
import beginner_4 from "../../images/LearningResources/beginner_4.jpg"
import beginner_5 from "../../images/LearningResources/beginner_5.jpg"
import beginner_6 from "../../images/LearningResources/beginner_6.jpg"
import beginner_7 from "../../images/LearningResources/beginner_7.jpg"
import beginner_8 from "../../images/LearningResources/beginner_8.jpg"

import advanced_1 from "../../images/LearningResources/advanced_1.jpg"
import advanced_2 from "../../images/LearningResources/advanced_2.jpg"
import advanced_3 from "../../images/LearningResources/advanced_3.jpg"
import advanced_4 from "../../images/LearningResources/advanced_4.jpg"
import advanced_5 from "../../images/LearningResources/advanced_5.jpg"
import advanced_6 from "../../images/LearningResources/advanced_6.jpg"
import advanced_7 from "../../images/LearningResources/advanced_7.jpg"
import bgImage from "../../images/learning-resources-dummy.jpg"

let Beginner = [beginner_1, beginner_2, beginner_3, beginner_4, beginner_5, beginner_6, beginner_7, beginner_8]
let Advanced = [advanced_1, advanced_2, advanced_3, advanced_4, advanced_5, advanced_6, advanced_7]
function LearningResources() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: bgImage,
    }));
  };

  return (
    <div className="LearningResources">
    <h1>For Beginners</h1>
      <Slider {...settings}>
        {Beginner.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={item}
                onError={handleErrorImage}
              />
            </div>
          </div>
        ))}
      </Slider>
      <h1>Advanced</h1>
      <Slider {...settings}>
        {Advanced.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={item}
                onError={handleErrorImage}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LearningResources;