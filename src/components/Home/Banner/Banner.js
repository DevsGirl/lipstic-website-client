import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import './Banner.css'

const Banner = () => {
    return (
    <>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
    </>
    );
};

export default Banner;