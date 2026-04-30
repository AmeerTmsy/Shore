export default function BasicInfoStep({
  productName,
  setProductName,
  brand,
  setBrand,
  category,
  setCategory,
  description,
  setdescription,
  gender,
  setGender,
  setStep
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Form */}
      <div className="lg:col-span-2 bg-white shadow-[1px_2px_5px_2px_rgba(0,0,0,0.1)] rounded-2xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g. Air Max Pulse 'Sunset Orange'"
            className="w-full border rounded-lg px-4 py-2 font-light focus:outline-none focus:ring focus:ring-orange-400 border-gray-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-orange-400 border-gray-300"
            >
              <option>Select Brand</option>
              <option>Nike</option>
              <option>Adidas</option>
              <option>Puma</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-4 py-2  focus:ring focus:ring-orange-400 border-gray-300"
            >
              <option>Select Category</option>
              <option>Sports</option>
              <option>Casual</option>
              <option>Running</option>
            </select>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-3">Gender Target</label>
          <div className="flex flex-wrap gap-4">
            {["men", "women", "unisex"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-6 py-2 rounded-lg border border-gray-300 capitalize cursor-pointer transition-all duration-300 ${gender === g
                  ? "bg-orange-100 border-orange-500 text-orange-600"
                  : "text-gray-600"
                  }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 font-light"
            placeholder="Write product description..."
          />
        </div>
        <div className=" flex flex-wrap justify-end gap-3">
          <button className="px-5 py-2 w-full sm:w-auto border border-orange-300 rounded-lg text-gray-600 cursor-pointer">
            Save Draft
          </button>
          <button onClick={() => setStep(prev => prev + 1)} className="px-5 py-2 w-full sm:w-auto bg-orange-500 text-white rounded-lg cursor-pointer">
            Continue
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="space-y-6">
        <div className="bg-linear-to-br  from-gray-700 via-gray-500 to-gray-950 h-64 w-full text-white p-6 rounded-2xl">
          <h3 className="text-lg font-medium mb-4">
            Tips for success
          </h3>
          <ul className="space-y-3 text-sm font-light">
            <li>✔ Use descriptive names with colorways for better SEO.</li>
            <li>✔ Categorize accurately to reach the right audience.</li>
            <li>✔ Good descriptions increase conversions.</li>
          </ul>
        </div>
        <div className="bg-white border border-blue-300 p-6 rounded-2xl">
          <h3 className="text-lg font-normal mb-2">
            Catalog Overview
          </h3>
          <p className="text-sm font-light text-gray-500">
            You can manage your products, pricing, and inventory from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}