import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMenu = () => {
  const menuCategories = ["appetizers", "desserts", "drinks", "fast food"];
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  const handleFileChange = () => {
    const selectedFile = watch("photo");
    const file = selectedFile[0];
    setSelectedFile(file);
  };

  return (
    <div className="lg:max-w-5xl relative max-w-4xl mx-auto text-black/80 flex flex-col min-h-[calc(90vh-70px)] justify-center items-center rounded-xl">
      <form className="w-4/6 z-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
          <div className="space-y-6">
            <div className="space-y-1 text-sm mb-3">
              <label className="block">Menu item name</label>
              <input
                {...register("menuItemName", { required: true })}
                className="w-full px-4 py-3 shadow-sm focus:outline-none rounded-md"
                type="text"
              />
              {errors.menuItemName && (
                <span className="text-red-500 mt-2">
                  Menu item name is required
                </span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block ">Menu item image</label>
              <div className="flex justify-start px-6 items-center py-3 bg-white shadow-sm rounded-md">
                <div className=" text-center">
                  <div className="flex items-center text-sm ">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md text-peach bg-gray font-shadow-sm"
                    >
                      <span className="px-2">
                        {selectedFile ? selectedFile.name : "Upload a file"}
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("menuItemImage")}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="pl-3 text-black/80">
                      {!selectedFile && "or drag and drop"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block">
                Menu category
              </label>
              <select
                {...register("menuCategory", { required: true })}
                className="w-full custom-select px-4 py-3 shadow-sm focus:outline-none p-2  bg-white text-gray-800 rounded-md"
              >
                <option value="">Select a category</option>
                {menuCategories.map((category, index) => (
                  <option
                    className="bg-peach py-10 px-6 hover:bg-transparent hover:text-pink text-white"
                    value={category}
                    key={index}
                  >
                    {category}
                  </option>
                ))}
              </select>
              {errors.menuCategory && (
                <span className="text-red-500">Please select a category</span>
              )}
            </div>

            <div className="">
              <div className="space-y-1 text-sm">
                <label className="block ">Menu item price</label>
                <input
                  {...register("menuItemPrice", {
                    pattern: /^[0-9]+$/,
                    message: "Please enter a valid price",
                  })}
                  className="w-full px-4 py-3  shadow-sm focus:outline-none rounded-md"
                  type="text"
                />
                {errors.menuItemPrice && (
                  <span className="text-red-500 mt-2">
                    {errors.menuItemPrice.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-1 lg:col-span-2 text-sm">
            <label className="block ">Item Delivery Time</label>
            <input
              {...register("ItemDeliveryTime")}
              className="block rounded-md resize-none focus:rose-300 w-full  px-4 py-3  shadow-sm focus:outline-none"
              type="text"
            />
          </div>
          <div className="space-y-1 lg:col-span-2 text-sm">
            <label className="block ">Menu item description</label>
            <textarea
              {...register("menuItemDescription")}
              className="block rounded-md resize-none focus:rose-300 w-full h-32 px-4 py-3  shadow-sm focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-10 py-4 btn btn-outline btn-sm rounded-md bg-ocean text-white font-bold"
        >
          Add Menu
        </button>
      </form>

      {/* Animated Images */}
      <img
        src="/public/delicious-pizza.png"
        className="hidden lg:block absolute -right-20 object-cover bottom-0 w-72 animate-blob animation-delay-4000"
        alt=""
      />
      <img
        src="/public/slice-pizza.png"
        className="hidden lg:block absolute left-5 top-20 h-16 animate-blob"
        alt=""
      />
    </div>
  );
};

export default AddMenu;