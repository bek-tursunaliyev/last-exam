import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 -z-999!">
      <div className="relative w-full  mx-auto overflow-hidden bg-[#E9EDE8] rounded-xl flex flex-col items-center gap-10 py-20 px-6">
        <img
          src="/pattern-fork.svg"
          alt=""
          className="absolute z-0 sm:!block !hidden left-[-48px] top-[182px] w-[179.13px] h-[231.72px] md:left-[-73px] md:top-[23px] md:w-[314.67px] md:h-[390.23px] select-none"
        />

        <img
          src="/pattern-knife.svg"
          alt=""
          className="absolute z-0 md:right-[-73px] sm:!block !hidden md:top-[24px] md:w-[338.43px] md:h-[338.43px] right-[-48px] -top-[50px] w-[171.78px] h-[171.78px] select-none"
        />

        <div className="relative flex flex-col items-center gap-3 text-center">
          <h1 className="font-extrabold text-[40px] md:text-[48px] leading-[120%] tracking-[-2px] text-[#163A34]">
            Ready to cook smarter?
          </h1>
          <p className="font-medium text-[20px] leading-[150%] tracking-[-0.4px] text-[#395852] max-w-[600px]">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>

        <Link
          to="/recipes"
          className="block mt-4 text-center text-white px-4 py-2 bg-[#163A34] rounded-[10px] border-2 border-transparent active:border-white active:outline-2 active:outline-[#163A34]"
        >
          Get Started
        </Link>
      </div>

      <div className="w-full mx-auto sm:flex sm:flex-row sm:gap-0 gap-6 flex-col-reverse flex items-center justify-between py-[40px] mt-12">
        <div className="text-[#163A34] text-[16px]">Made with ❤️ and 🥑</div>

        <div className="flex flex-row items-center gap-[24px]">
          <Link to="/" aria-label="Instagram">
            <img
              src="/icon-instagram.svg"
              alt="Instagram"
              className="w-[22px] h-[22px]"
            />
          </Link>
          <Link to="/" aria-label="Bullet">
            <img
              src="/icon-bluesky.svg"
              alt="Bullet"
              className="w-[24px] h-[22px]"
            />
          </Link>
          <Link to="/" aria-label="TikTok">
            <img
              src="/icon-tiktok.svg"
              alt="TikTok"
              className="w-[19.25px] h-[22px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
