import React from "react";
import HeroImage from "../assets/digman.png";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white text-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
           Hi! I'm Eduardo A. Digman
          </h2>
          <p className="text-black-500 py-4 max-w-md">
         And this is my personal portfolio.
          </p>

          
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
