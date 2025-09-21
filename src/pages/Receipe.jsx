import { Link, useLocation } from "react-router-dom";
import data from "../../data/db.json";

function Receipe() {
  const { state } = useLocation();
  const recipeFromState = state?.recipe;
  const id = state?.recipe?.id || window.location.pathname.split("/recipe/")[1];
  const recipeFromDB = data.recipes.find((r) => r.id.toString() === id);

  const recipe = recipeFromState || recipeFromDB;

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 sm:px-6 mt-[64px] mb-[24px]">
        <div className="text-center text-6xl text-[#163A34] mx-auto w-full">
          Error: Recipe not found
        </div>
      </div>
    );
  }

  const ingredients =
    recipe.ingredients && Array.isArray(recipe.ingredients)
      ? recipe.ingredients
      : recipe.ingredients
      ? [recipe.ingredients]
      : ["No ingredients available"];
  const instructions =
    recipe.instructions && Array.isArray(recipe.instructions)
      ? recipe.instructions
      : recipe.instructions
      ? [recipe.instructions]
      : ["No instructions available"];

  const splitIngredients = ingredients.map((item) =>
    item.includes(",")
      ? item.split(",").map((part) => part.trim())
      : [item.trim()]
  );
  const splitInstructions = instructions.map((item) =>
    item.includes(",")
      ? item.split(",").map((part) => part.trim())
      : [item.trim()]
  );

  return (
    <div className="container px-6 sm:px-4 my-[48px] mx-auto">
      <div className="lg:flex-row flex flex-col gap-10 items-start lg:justify-evenly">
        <div><div className="flex gap-1.5 items-center mb-4">
          <Link
            to="/recipes"
            className="font-[600] text-sm sm:text-base md:text-[18px] text-[#708580]"
          >
            Recipes /
          </Link>
          <h3 className="text-[#163A34] font-[600] text-sm sm:text-base md:text-[18px] truncate">
            {recipe.title}
          </h3>
        </div>
        <div className="lg:*:w-[580px] w-auto lg:h-[580px] overflow-hidden rounded-[10px] flex-col flex items-center justify-center">
          <img
            src={recipe.imageUrl}
            className="w-full h-auto"
            alt={recipe.title}
          />
        </div></div>

        <div className="max-w-[572px] flex flex-col gap-5">
          <h1 className="font-[800] text-[#163A34] text-[40px] lg:text-[48px]">
            {recipe.title}
          </h1>
          <p className="text-[20px] text-[#395852]">
            {recipe.overview || recipe.overwiev || "No description available"}
          </p>
          <div className="sm:flex grid grid-cols-2 items-center gap-x-6 gap-y-2 w-full">
            <div className="flex flex-row items-center gap-[6px]">
              <img src="/icon-servings.svg" alt="Servings icon" />
              <span className="font-[500] text-[16px] text-[#163A34]">
                {recipe.servings || "N/A"} servings
              </span>
            </div>
            <div className="flex flex-row items-center gap-[6px]">
              <img src="/icon-prep-time.svg" alt="Prep time icon" />
              <span className="font-[500] text-[16px] text-[#163A34]">
                {recipe.prepMinutes || "N/A"} min prep
              </span>
            </div>
            <div className="flex flex-row items-center gap-[6px]">
              <img src="/icon-cook-time.svg" alt="Cook time icon" />
              <span className="font-[500] text-[16px] text-[#163A34]">
                {recipe.cookMinutes || "N/A"} min cook
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
                    alt="Bullet point"
                    className="w-[24px] mt-0.5"
                  />
                  <span className="text-[20px] text-[#395852]">
                    {arr.map((part, i) => (
                      <span key={i}>{part} </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="font-[700] text-[24px] text-[#163A34]">
              Instructions:
            </h1>
            <ul className="space-y-2 mt-2">
              {splitInstructions.map((arr, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img
                    src="/icon-bullet-point.svg"
                    alt="Bullet point"
                    className="w-[24px] mt-0.5"
                  />
                  <span className="text-[20px] text-[#395852]">
                    {arr.map((part, i) => (
                      <span key={i}>{part} </span>
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
