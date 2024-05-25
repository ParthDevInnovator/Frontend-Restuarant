import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             

Welcome to Great Food, where culinary artistry meets the vibrant culture of Gandhidham! Nestled in the heart of this bustling city, our restaurant offers a unique blend of traditional and contemporary flavors, crafted to tantalize your taste buds and provide an unforgettable dining experience.

At Great Food, we pride ourselves on sourcing the freshest ingredients, often locally grown, to ensure that every dish we serve is of the highest quality. Our talented chefs combine these ingredients with a passion for innovation, creating a menu that celebrates both the rich heritage of Indian cuisine and the latest trends in international gastronomy.

Our warm and inviting atmosphere is perfect for any occasion, whether you’re enjoying a casual meal with family, hosting a business luncheon, or celebrating a special event. We believe in making every guest feel like part of our family, with attentive service that anticipates your every need.

Come and discover why Great Food is the preferred dining destination in Gandhidham. From our signature dishes to our cozy ambiance, we are committed to providing a memorable culinary journey that will keep you coming back for more. Join us and savor the flavors that make [Restaurant Name] truly special.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;