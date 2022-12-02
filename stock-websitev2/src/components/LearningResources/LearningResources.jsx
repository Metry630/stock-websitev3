import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './LearningResource.css';
import { Beginner, Advanced} from './ResData';
import bgImage from "../../images/learning-resources-dummy.jpg"

function LearningResources() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <h1>For Beginner</h1>
      <Slider {...settings}>
        {Beginner.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
      <h1>For Advanced</h1>
      <Slider {...settings}>
        {Advanced.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LearningResources;