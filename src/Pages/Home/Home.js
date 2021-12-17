import React from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "../Shared/Navbar/Navbar";
import img1 from "../../image/slider/1.jpg";
import img2 from "../../image/slider/2.jpg";
import img3 from "../../image/slider/3.jpg";
import ShopingBook from "../ShopingBook/ShopingBook";
import Footer from "../Shared/Footer/Footer";
const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First Public Book</h3>
            <p>Please read online and cart tom my site</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second Publication My Book Bangladesh</h3>
            <p>Bangladesh public this book is a very good contribute</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third Publication with India</h3>
            <p>Indian public is very good review and buy this book</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ShopingBook></ShopingBook>
      <hr />
      <Footer></Footer>
    </>
  );
};

export default Home;
