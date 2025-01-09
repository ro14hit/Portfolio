import React from "react";
import { styles } from "../styles";
import "./Hero.css";
import { ComputersCanvas } from "./canvas";
import Rohit from "../assets/Rohit.jpeg";
const Hero = () => {
  function changeBorderColor() {
    const button = document.getElementById("myButton");
    const colors = ["red", "green", "blue", "yellow"];
    button.style.borderColor =
      colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <section className="relative w-full sm:h-[120vh] h=[100vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div class="flex items-center">
          <img
            class=" animated-border object-contain flex rounded-full sm:w-[250px] w-[125px] mr-4"
            src={Rohit}
            id="myButton"
            alt="title"
          />
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span class="text-[#34eb80]">Rohit</span>
            </h1>
            <p class={`${styles.heroSubText} mt-2 text-white-100`}>
              A Front-End web developer <br class="sm:block hidden" /> with
              experience of 2+ years in ReactJS, Javascript, NodeJS and NextJS.
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  );
};

export default Hero;
