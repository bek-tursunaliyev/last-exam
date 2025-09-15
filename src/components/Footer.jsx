import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6">
      <div class="relative w-full  mx-auto overflow-hidden bg-[#E9EDE8] rounded-xl flex flex-col items-center gap-10 py-20 px-6">
        <img
          src="/pattern-fork.svg"
          alt=""
          class="absolute z-0 sm:!block !hidden left-[-48px] top-[182px] w-[179.13px] h-[231.72px] md:left-[-73px] md:top-[23px] md:w-[314.67px] md:h-[390.23px] select-none"
        />

        <img
          src="/pattern-knife.svg"
          alt=""
          class="absolute z-0 md:right-[-73px] sm:!block !hidden md:top-[24px] md:w-[338.43px] md:h-[338.43px] right-[-48px] -top-[50px] w-[171.78px] h-[171.78px] select-none"
        />

        <div class="relative z-10 flex flex-col items-center gap-3 text-center">
          <h1 class="font-extrabold text-[48px] leading-[120%] tracking-[-2px] text-[#163A34]">
            Ready to cook smarter?
          </h1>
          <p class="font-medium text-[20px] leading-[150%] tracking-[-0.4px] text-[#395852] max-w-[600px]">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>

        <Link
          to="/"
          class="flex items-center justify-center px-6 py-4 w-[176px] h-[57px] bg-[#163A34] text-white text-[18px] font-bold leading-[140%] rounded-[10px] z-20"
        >
          Get Started
        </Link>
      </div>

      <div class="w-full mx-auto sm:flex sm:flex-row sm:gap-0 gap-6 flex-col-reverse flex items-center justify-between py-[40px] mt-12">
        <div class="text-[#163A34] text-[16px]">
          Made with ❤️ and 🥑
        </div>

        <div class="flex flex-row items-center gap-[24px]">
          <Link to="/" aria-label="Instagram">
            <img
              src="/icon-instagram.svg"
              alt="Instagram"
              class="w-[22px] h-[22px]"
            />
          </Link>
          <Link to="/" aria-label="Bullet">
            <img
              src="/icon-bluesky.svg"
              alt="Bullet"
              class="w-[24px] h-[22px]"
            />
          </Link>
          <Link to="/" aria-label="TikTok">
            <img
              src="/icon-tiktok.svg"
              alt="TikTok"
              class="w-[19.25px] h-[22px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
