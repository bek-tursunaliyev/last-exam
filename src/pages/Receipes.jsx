import {
  LucideDelete,
  LucideSearch,
  LucideTrash,
  LucideTrash2,
} from "lucide-react";
import React, { useState, useEffect } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
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

  const prepLabel = "Prep time";
  const cookLabel = "Cook time";
  const options = ["15", "30", "60", "Any"];

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) {
      setRecipes(JSON.parse(saved));
    }
  }, []);

  const saveToLocal = (data) => {
    localStorage.setItem("recipes", JSON.stringify(data));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file" && files[0]) {
      // convert file to Base64 for localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, file: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title: formData.title,
      overwiev: formData.overwiev,
      servings: formData.servings,
      prepMinutes: formData.prepMinutes,
      cookMinutes: formData.cookMinutes,
      imageUrl: formData.file,
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    saveToLocal(updatedRecipes);

    setFormData({
      title: "",
      overwiev: "",
      servings: "",
      prepMinutes: "",
      cookMinutes: "",
      file: null,
    });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    saveToLocal(updated);
  };

  // Filtering + search
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.overwiev.toLowerCase().includes(search.toLowerCase());

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

  return (
    <div className="container mx-auto px-4 sm:px-6 mt-[64px] mb-[24px]">
      {/* Header */}
      <div className="flex flex-col items-center lg:text-center mx-auto gap-3 max-w-[760px]">
        {" "}
        <h2 className="font-extrabold text-[48px] leading-[120%] tracking-[-0.05em] text-[#163A34]">
          {" "}
          Explore our simple, healthy recipes{" "}
        </h2>{" "}
        <p className="font-medium text-[20px] text-[#395852] lg:px-4">
          {" "}
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.{" "}
        </p>{" "}
      </div>

      {/* Filters + Add */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 w-full mx-auto">
        {/* Prep filter */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenPrep(!openPrep);
              setOpenCook(false);
            }}
            className="flex items-center justify-between px-4 py-2 w-[181px] h-[47px] bg-white border border-[#E0E6E3] rounded-[10px]"
          >
            <span className="font-semibold text-[16px] text-[#163A34]">
              {prepSelected || prepLabel}
            </span>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <path d="m6 8 4 4 4-4" />
            </svg>
          </button>
          {openPrep && (
            <div className="absolute mt-2 w-[200px] bg-white border rounded-lg shadow p-2 z-10">
              {options.map((opt, i) => (
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
                  {opt === "Any" ? "Any" : `< ${opt} min`}
                </label>
              ))}
              <button
                onClick={() => setPrepSelected("")}
                className="text-sm text-blue-600 mt-2"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Cook filter */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenCook(!openCook);
              setOpenPrep(false);
            }}
            className="flex items-center justify-between px-4 py-2 w-[181px] h-[47px] bg-white border border-[#E0E6E3] rounded-[10px]"
          >
            <span className="font-semibold text-[16px] text-[#163A34]">
              {cookSelected || cookLabel}
            </span>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <path d="m6 8 4 4 4-4" />
            </svg>
          </button>
          {openCook && (
            <div className="absolute mt-2 w-[200px] bg-white border rounded-lg shadow p-2 z-10">
              {options.map((opt, i) => (
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
                  {opt === "Any" ? "Any" : `< ${opt} min`}
                </label>
              ))}
              <button
                onClick={() => setCookSelected("")}
                className="text-sm text-blue-600 mt-2"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Search + Add */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 w-[250px] md:w-[310px] h-[47px] bg-white border border-[#E0E6E3] rounded-[10px]">
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
            className="px-4 py-2 bg-green-600 text-white rounded-[10px]"
          >
            ➕ Add
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4">Add Recipe</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <textarea
                name="overwiev"
                placeholder="Overview"
                value={formData.overwiev}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="number"
                name="servings"
                placeholder="Servings"
                value={formData.servings}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="prepMinutes"
                placeholder="Prep Minutes"
                value={formData.prepMinutes}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="cookMinutes"
                placeholder="Cook Minutes"
                value={formData.cookMinutes}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
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
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group flex relative flex-col items-start my-[24px] p-2 gap-4 bg-white border border-[#E0E6E3] rounded-[10px]"
          >
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="h-[300px] overflow-hidden flex items-center justify-center rounded-[10px] w-full">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col items-start px-2 gap-3 w-full">
                <div className="flex flex-col items-start gap-[10px] w-full">
                  <h3 className="font-nunito font-bold text-[20px] text-[#163A34]">
                    {recipe.title}
                  </h3>
                  <p className="font-[500] text-[16px] text-[#395852]">
                    {recipe.overwiev}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 w-full">
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

              {/* Delete button faqat hoverda chiqadi */}
              <button
                onClick={() => handleDelete(recipe.id)}
                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex justify-center items-center p-3 rounded-full bg-[#163A34] text-white"
              >
                <LucideTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
