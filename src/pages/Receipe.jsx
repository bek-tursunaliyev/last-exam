import React from "react";
import { useLocation } from "react-router-dom";
import data from "../../data/db.json";

function Receipe() {
  const { state } = useLocation();
  const recipe = state?.recipe;

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 sm:px-6 mt-[64px] mb-[24px]">
        <div>Error: Recipe not found</div>
      </div>
    );
  }
  const splitIngredients = recipe.ingredients.map((item) => item.split(","));
  const splitInstructions = recipe.instructions.map((item) => item.split(","));

  return (
    <div className="container px-6 sm:px-4 my-[48px] mx-auto">
      <div className="flex gap-1.5 items-center">
        <h3 className="font-[600] text-[18px] text-[#708580]">Recipes /</h3>
        <h3 className="text-[#163A34] font-[600] text-[18px]">
          {recipe.title}
        </h3>
      </div>

      <div className="flex justify-between">
        <div className="*:w-[580px]">
          <img src={recipe.imageUrl} className="rounded-[10px]" />
        </div>

        <div className="max-w-[572px] flex flex-col gap-5">
          <h1 className="font-[800] text-[#163A34] text-[48px]">
            Mediterranean Chickpea Salad
          </h1>
          <p className="text-[20px] text-[#395852]">{recipe.overview}</p>
          <div className="flex items-center gap-x-6 gap-y-2 w-full">
            <div className="flex flex-row items-center gap-[6px]">
              <img src="/icon-servings.svg" alt="" />
              <span className="font-[500] text-[16px] text-[#163A34]">
                {recipe.servings} servings
              </span>
            </div>
            <div className="flex flex-row items-center gap-[6px]">
              <img src="/icon-prep-time.svg" alt="" />
              <span className="font-[500] text-[16px] text-[#163A34]">
                {recipe.prepMinutes} min prep
              </span>
            </div>
            <div className="flex flex-row items-center gap-[6px]">
              <img src="/icon-cook-time.svg" alt="" />
              <span className="font-[500] text-[16px] text-[#163A34]">
                {recipe.cookMinutes} min cook
              </span>
            </div>
          </div>

          <div>
            <h1 className="font-[700] text-[24px] text-[#163A34]">
              Ingredients:
            </h1>
            <ul className="space-y-2 mt-2">
              {splitIngredients.map((arr, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/icon-bullet-point.svg"
                    alt="bullet"
                    className="w-[24px] mt-0.5"
                  />
                  <span className="text-[20px] text-[#395852]">
                    {arr.map((part, i) => (
                      <span key={i}>{part.trim()} </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-[700] text-[24px] text-[#163A34]">
              instructions:
            </h1>
            <ul className="space-y-2 mt-2">
              {splitInstructions.map((arr, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/icon-bullet-point.svg"
                    alt="bullet"
                    className="w-[24px] mt-0.5"
                  />
                  <span className="text-[20px] text-[#395852]">
                    {arr.map((part, i) => (
                      <span key={i}>{part.trim()} </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipe;
