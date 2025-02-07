const AddProduct = () => {
  return (
    <div className=" md:mx-8 font-roboto lg:mt-10 lg:flex  gap-5 p-0 md:4 lg:p-0">
      <div className="flex-1 px-2 md:px-16 lg:pb-10 pt-0">
        <h2 className="text-xl md:text-3xl text-center text-[#80B9AD] font-poppins md:pt-2 lg:mt-0 font-bold">
          Add Product
        </h2>
        <form>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="productName"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Product Description
              </label>
              <input
                type="text"
                placeholder="Enter Product Description"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="productDescription"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="price"
                required
              />
            </div>
            <div className="">
              <div className="">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Color
                </label>
                <input
                  type="text"
                  placeholder="Color"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="color"
                  required
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  CPU
                </label>
                <input
                  type="text"
                  placeholder="CPU"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="cpu"
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
              >
                Add Doctor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
