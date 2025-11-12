import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          At Pedro's Pizzaria, we believe pizza is more than just food—it's an experience. Using only the freshest ingredients and time-honored recipes, we craft delicious pizzas that satisfy every taste. From classic favorites to our signature creations, each pizza is made with love and passion. Whether you’re dining in, taking out, or ordering online, our mission is to bring joy to every bite and make every visit a memorable one.
        </p>
      </div>
    </div>
  );
}

export default About;
