import { LucidePlus, LucideSearch, LucideTrash2 } from "lucide-react";
import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Lottie from "lottie-react";
import forkKnifeAnim from "/public/loading.json";
import defaultFoods from "../../data/db.json";

function Recipes() {
  const { data: recipes, loading, error, createData, deleteData } = useFetch();

  const [formData, setFormData] = useState({
    title: "",
    overwiev: "",
    servings: "",
    prepMinutes: "",
    cookMinutes: "",
    file: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // filters + search
  const [openPrep, setOpenPrep] = useState(false);
  const [openCook, setOpenCook] = useState(false);
  const [prepSelected, setPrepSelected] = useState("");
  const [cookSelected, setCookSelected] = useState("");
  const [search, setSearch] = useState("");

  const prepLabel = "Max Prep Time";
  const cookLabel = "Max Cook Time";
  const prepOptions = [0, 5, 10];
  const cookOptions = [0, 5, 10, 15, 20];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("overwiev", formData.overwiev);
      fd.append("servings", formData.servings);
      fd.append("prepMinutes", formData.prepMinutes);
      fd.append("cookMinutes", formData.cookMinutes);
      if (formData.file) {
        fd.append("file", formData.file);
      }

      await createData(fd);

      setFormData({
        title: "",
        overwiev: "",
        servings: "",
        prepMinutes: "",
        cookMinutes: "",
        file: null,
      });
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error creating recipe:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };

  const filteredRecipes = (recipes || []).filter((recipe) => {
    const matchesSearch =
      recipe.title?.toLowerCase().includes(search.toLowerCase()) ||
      recipe.overwiev?.toLowerCase().includes(search.toLowerCase());

    const matchesPrep = prepSelected
      ? prepSelected === "Any" ||
        Number(recipe.prepMinutes) <= Number(prepSelected)
      : true;

    const matchesCook = cookSelected
      ? cookSelected === "Any" ||
        Number(recipe.cookMinutes) <= Number(cookSelected)
      : true;

    return matchesSearch && matchesPrep && matchesCook;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie
          animationData={forkKnifeAnim}
          loop={true}
          className="w-40 h-40"
        />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 mt-[64px] mb-[24px]">
      {/* Header */}
      <div className="flex flex-col items-center lg:text-center mx-auto gap-3 max-w-[760px]">
        <h2 className="font-extrabold text-[48px] leading-[120%] tracking-[-0.05em] text-[#163A34]">
          Explore our simple, healthy recipes
        </h2>
        <p className="font-medium text-[20px] text-[#395852] lg:px-4">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>

      {/* Filters + Add */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 w-full mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-">
          {/* Prep filter */}
          <div className="relative w-full md:flex-1 min-w-[150px] max-w-full ">
            <button
              onClick={() => {
                setOpenPrep(!openPrep);
                setOpenCook(false);
              }}
              className="flex items-center justify-between px-4 py-2 w-full h-[47px] bg-white border border-[#E0E6E3] rounded-[10px]"
            >
              <span className="font-semibold text-[16px] text-[#163A34]">
                {prepSelected ? `${prepSelected} minutes` : prepLabel}
              </span>

              <svg width="20" height="20" fill="none" stroke="currentColor">
                <path d="m6 8 4 4 4-4" />
              </svg>
            </button>
            {openPrep && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow p-2 z-10">
                {prepOptions.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="prep"
                      value={opt}
                      checked={prepSelected === opt}
                      onChange={() => setPrepSelected(opt)}
                    />
                    {`${opt} minutes`}
                  </label>
                ))}
                <button
                  onClick={() => setPrepSelected("")}
                  className="mt-2 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* Cook filter */}
          <div className="relative w-full md:flex-1 min-w-[184px] max-w-full ">
            <button
              onClick={() => {
                setOpenCook(!openCook);
                setOpenPrep(false);
              }}
              className="flex items-center justify-between px-4 py-2.5 w-full bg-white border border-[#E0E6E3] rounded-[10px]"
            >
              <span className="font-semibold text-[16px] text-[#163A34]">
                {cookSelected ? `${cookSelected} minutes` : cookLabel}
              </span>

              <svg width="20" height="20" fill="none" stroke="currentColor">
                <path d="m6 8 4 4 4-4" />
              </svg>
            </button>
            {openCook && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow p-2 z-10">
                {cookOptions.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="cook"
                      value={opt}
                      checked={cookSelected === opt}
                      onChange={() => setCookSelected(opt)}
                    />
                    {`${opt} minutes`}
                  </label>
                ))}
                <button
                  onClick={() => setCookSelected("")}
                  className="mt-2 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Search + Add */}
        <div className="flex flex-row items-start md:items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2 px-4 py-2 w-full md:w-[310px] h-[47px] bg-white border border-[#E0E6E3] rounded-[10px]">
            <LucideSearch />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 flex items-center gap-1 bg-[#163A34] cursor-pointer text-white rounded-[10px] w-full md:w-auto border-2 border-transparent active:border-white active:outline-2 active:outline-[#163A34]"
          >
            <LucidePlus /> <span>Add</span>
          </button>
        </div>
      </div>

      {/* Modal for adding */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-bold text-[#163A34] mb-6 text-center">
              Add Recipe
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                placeholder="Recipe title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 focus:ring-2 focus:ring-[#163A34] focus:outline-none p-2 sm:p-3 rounded-xl text-sm sm:text-base"
                required
              />

              <textarea
                name="overwiev"
                placeholder="Short description..."
                value={formData.overwiev}
                onChange={handleChange}
                className="border border-gray-300 focus:ring-2 focus:ring-[#163A34] focus:outline-none p-2 sm:p-3 rounded-xl min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="servings"
                  placeholder="Servings"
                  value={formData.servings}
                  onChange={handleChange}
                  className="border border-gray-300 focus:ring-2 focus:ring-[#163A34] focus:outline-none p-2 sm:p-3 rounded-xl text-sm sm:text-base"
                />
                <input
                  type="number"
                  name="prepMinutes"
                  placeholder="Prep (min)"
                  value={formData.prepMinutes}
                  onChange={handleChange}
                  className="border border-gray-300 focus:ring-2 focus:ring-[#163A34] focus:outline-none p-2 sm:p-3 rounded-xl text-sm sm:text-base"
                />
              </div>

              <input
                type="number"
                name="cookMinutes"
                placeholder="Cook (min)"
                value={formData.cookMinutes}
                onChange={handleChange}
                className="border border-gray-300 focus:ring-2 focus:ring-[#163A34] focus:outline-none p-2 sm:p-3 rounded-xl text-sm sm:text-base"
              />

              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="border border-gray-300 focus:ring-2 focus:ring-[#163A34] focus:outline-none p-2 sm:p-3 rounded-xl text-sm sm:text-base"
              />

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#163A34] to-[#395852] text-white font-semibold shadow hover:from-[#395852] hover:to-[#163A34] transition text-sm sm:text-base"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {defaultFoods.recipes.map((foods) => (
          <div
            key={foods.id}
            className="group flex relative flex-col items-start my-[24px] p-2 gap-4 bg-white border border-[#E0E6E3] rounded-[10px]"
          >
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="h-[300px] overflow-hidden flex items-center justify-center rounded-[10px] w-full">
                <img
                  src={foods.image.small}
                  alt={foods.image.small}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col items-start px-2 gap-3 w-full">
                <div className="flex flex-col items-start gap-[10px] w-full">
                  <h3 className="font-nunito font-bold text-[20px] text-[#163A34]">
                    {foods.title}
                  </h3>
                  <p className="font-[500] line-clamp-1 text-[16px] text-[#395852]">
                    {foods.overview}
                  </p>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-6 gap-y-2 w-full">
                  <div className="flex flex-row items-center gap-[6px]">
                    <img src="/icon-servings.svg" alt="" />
                    <span className="font-[500] text-[16px] text-[#163A34]">
                      {foods.servings} servings
                    </span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px]">
                    <img src="/icon-prep-time.svg" alt="" />
                    <span className="font-[500] text-[16px] text-[#163A34]">
                      {foods.prepMinutes} min prep
                    </span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px]">
                    <img src="/icon-cook-time.svg" alt="" />
                    <span className="font-[500] text-[16px] text-[#163A34]">
                      {foods.cookMinutes} min cook
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <button className="flex justify-center items-center w-full px-8 py-3 bg-[#163A34] rounded-full">
                <span className="font-[500] text-[16px] text-white">
                  View Recipe
                </span>
              </button>

              <button
                onClick={() => handleDelete(foods.id)}
                className="
                absolute top-1 right-1
                opacity-100
                sm:opacity-0
                sm:group-hover:opacity-100
                transition-opacity duration-200
                flex justify-center items-center
                p-2 sm:p-3
                rounded-full bg-[#163A34] text-white
              "
              >
                <LucideTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        ))}
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group flex relative flex-col items-start my-[24px] p-2 gap-4 bg-white border border-[#E0E6E3] rounded-[10px]"
          >
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="h-[300px] overflow-hidden flex items-center justify-center rounded-[10px] w-full">
                <img
                  src={`https://${recipe.imageUrl}`}
                  alt={recipe.imageUrl}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col items-start px-2 gap-3 w-full">
                <div className="flex flex-col items-start gap-[10px] w-full">
                  <h3 className="font-nunito font-bold text-[20px] text-[#163A34]">
                    {recipe.title}
                  </h3>
                  <p className="font-[500] line-clamp-1 text-[16px] text-[#395852]">
                    {recipe.overwiev}
                  </p>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-6 gap-y-2 w-full">
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
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <button className="flex justify-center items-center w-full px-8 py-3 bg-[#163A34] rounded-full">
                <span className="font-[500] text-[16px] text-white">
                  View Recipe
                </span>
              </button>

              <button
                onClick={() => handleDelete(recipe.id)}
                className="
                  absolute top-1 right-1
                  opacity-100
                  sm:opacity-0
                  sm:group-hover:opacity-100
                  transition-opacity duration-200
                  flex justify-center items-center
                  p-2 sm:p-3
                  rounded-full bg-[#163A34] text-white
                "
              >
                <LucideTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
