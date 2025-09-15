import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "/icon-whole-food-recipes.svg",
      title: "Whole-food recipes",
      description: "Each dish uses everyday, unprocessed ingredients.",
      style:
        "max-w-[60px] max-h-[60px] flex items-center justify-center p-[18.4px_13.94px] bg-white border border-[#E9EDE8] rounded-[12px]",
    },
    {
      icon: "/icon-minimum-fuss.svg",
      title: "Minimum fuss",
      description:
        "All recipes are designed to make eating healthy quick and easy.",
      style:
        "max-w-[60px] max-h-[60px] flex items-center justify-center p-[8px_8px] bg-white border border-[#E9EDE8] rounded-[12px]",
    },
    {
      icon: "/icon-search-in-seconds.svg",
      title: "Search in seconds",
      description:
        "Filter by name or ingredient and jump straight to the recipe you need.",
      style:
        "max-w-[60px] max-h-[60px] flex items-center justify-center p-[8px_8px] bg-white border border-[#E9EDE8] rounded-[12px]",
    },
  ];

  return (
    <div className="container mx-auto mt-[48px] md:mt-[80px]">
      <div className="text-left mx-auto md:text-center flex flex-col items-start md:items-center px-4">
        <h1 className="relative text-[#163A34] text-[32.5px] sm:text-[64px] md:text-[72px] font-[800] leading-none">
          <span className="relative inline-block">
            Healthy
            <div className="absolute left-0 bottom-0 w-full h-[17px] sm:h-[30px] md:h-[39px] bg-[#F9D3BB] rounded-[4px] -z-10"></div>
          </span>{" "}
          meals, zero fuss
        </h1>

        <p className=" max-w-[580px] text-xl mx-auto">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <Link
          to="/recipes"
          className="block mt-4 text-center text-white px-4 py-2 bg-[#163A34] rounded-[10px]"
        >
          Start exploring
        </Link>
      </div>

      {/* Responsive image */}
      <div className="mt-8 px-4 sm:px-6 *:md:border-10 *:border-5 *:rounded-xl *:border-white lg:px-8 mx-auto max-w-[1200px]">
        <picture>
          {/* Large screens */}
          <source
            srcSet="/image-home-hero-large.webp"
            media="(min-width: 768px)"
            type="img"
          />

          {/* Small screens */}
          <source
            srcSet="/image-home-hero-small.webp"
            media="(max-width: 767px)"
            type="img"
          />

          {/* Fallback */}
          <img
            src="/image-home-hero-small.webp"
            alt="Home Hero"
            className="w-full h-auto rounded-lg"
          />
        </picture>
      </div>

      <div className="mt-[48px] md:mt-[80px] px-4 sm:px-6 mb-[97px]">
        <h1 className="font-[800] md:text-[48px] text-[42px] text-left md:text-center text-[#163A34]">
          What you'll get
        </h1>

        <div className="flex md:flex-row flex-col mt-8 sm:mt-[48px] md:gap-0 sm:gap-8 gap-6 items-start md:items-center justify-start md:justify-between gap-">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div className={`${feature.style}`}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[40px] h-auto"
                />
              </div>
              <div className="max-w-[376px]">
                <h3 className="font-[700] text-[32px] text-[#163A34]">
                  {feature.title}
                </h3>
                <p className="text-[#395852] text-[20px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-[97px] px-4 sm:px-6 grid grid-cols-1 md:gap-0 gap-[28.14px] items-center md:grid-cols-2">
        <div className="flex flex-col items-start gap-5 max-w-[510px]">
          <h1 className="text-[48px] font-[800] text-[#163A34]">
            Built for real life
          </h1>
          <p className="text-[20px] sm:text-[22px] md:text-[24px] text-[#395852]">
            Cooking shouldn’t be complicated. These recipes come in under
            <span className="relative inline-block font-bold">
              30 minutes
              <div className="absolute left-0 bottom-1.5 w-full h-[10px] md:h-[12px] bg-[#FE9F6B] rounded-[4px] -z-10"></div>
            </span>{" "}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>

          <p className="text-[20px] text-[#395852]">
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>

        <div>
          <picture>
            <source
              srcSet="/image-home-real-life-large.webp"
              media="(min-width: 768px)"
              type="img"
            />

            <source
              srcSet="/image-home-real-life-small.webp"
              media="(max-width: 767px)"
              type="img"
            />

            <img
              src="/image-home-hero-small.webp"
              alt="Home Hero"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Home;
