import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg " alt="restaurant" />
      <div className="item">
        <h3> Your Vision, Our Craft</h3>
        <div>
          <h1>The Perfect Event, Every Time</h1>
          <p>We Plan, You Celebrate </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
