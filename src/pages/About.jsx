import React from "react";

function About() {
  return (
    <div className="mx-auto px-4 sm:px-6 container">
      <div class="flex items-center justify-center my-16 lg:my-[72.57px]">
        <div class="flex justify-between flex-col lg:flex-row items-center border-b pb-[72.57px] border-[#E0E6E3]  ">
          <div class="md:text-left flex flex-col gap-6">
            <div>
              <h1 className="bg-[#FE9F6B] text-[#163A34] inline-block! px-4 py-1 rounded ">
                Our mission
              </h1>
            </div>
            <h1 class="text-4xl font-[800] text-[40px] lg:text-[48px] text-[#163A34]">
              Help more people cook nourishing meals, more often.
            </h1>
            <p class="text-[#395852] text-[20px] max-w-[510px]">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p class="text-[#395852] text-[20px] max-w-[510px]">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <div className="mt-8 *:rounded-xl mx-auto  lg:max-w-[618px]">
            <picture>
              {/* Large screens */}
              <source
                srcSet="/image-about-our-mission-large.webp"
                media="(min-width: 768px)"
                type="img"
              />

              {/* Small screens */}
              <source
                srcSet="/image-about-our-mission-small.webp"
                media="(max-width: 767px)"
                type="img"
              />

              {/* Fallback */}
              <img
                src="/image-about-our-mission-large.webp"
                alt="Home Hero"
                className="w-full h-auto rounded-lg"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="mb-16 flex gap-10 lg:flex-row flex-col justify-between border-b pb-[72.57px] border-[#E0E6E3]">
        <div className="max-w-[372px]">
          <h1 className="text-5xl text-[40px] text-[#163A34] font-[800]">Why we exist</h1>
        </div>

        <div className="max-w-[700px] ">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[20px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Empower home kitchens.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[20px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Make healthy look good.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[20px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Cut through the noise.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-16 flex gap-10 lg:flex-row flex-col justify-between border-b pb-[72.57px] border-[#E0E6E3]">
        <div className="max-w-[372px]">
          <h1 className="lg:text-5xl text-[40px] text-[#163A34] font-[800]">
            Our food philosophy
          </h1>
        </div>

        <div className="max-w-[700px] ">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[24px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Whole ingredients first.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[24px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Flavor without compromise.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[24px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Respect for time.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 text-[#163A34] text-[24px] items-center">
                <img src="/icon-bullet-point.svg" alt="" />
                <h3>Sustainable choices.</h3>
              </div>
              <p className="text-[20px] text-[#395852]">
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between flex-col lg:flex-row lg:items-center border-b pb-[72.57px] border-[#E0E6E3]  ">
        <div class="md:text-left flex flex-col gap-6">
          <h1 class="text-4xl font-[800] lg:text-[48px] text-[40px] text-[#163A34]">
            Beyond the plate
          </h1>
          <p class="text-[#395852] text-[20px] max-w-[510px]">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="text-[#395852] text-[20px] max-w-[510px] list-disc pl-6">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
        <div className="mt-8 *:rounded-xl mx-auto  lg:max-w-[618px]">
          <picture>
            {/* Large screens */}
            <source
              srcSet="/image-about-beyond-the-plate-large.webp"
              media="(min-width: 768px)"
              type="img"
            />

            {/* Small screens */}
            <source
              srcSet="/image-about-beyond-the-plate-small.webp"
              media="(max-width: 767px)"
              type="img"
            />

            {/* Fallback */}
            <img
              src="/image-about-beyond-the-plate-large.webp"
              alt="Home Hero"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default About;
