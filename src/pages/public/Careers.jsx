import { useState } from "react";

export default function Careers() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 border-b border-gray-300 pb-2 inline-block w-full md:text-start shadow-bottom">
        Current Openings
      </h1>

      <div className="grid md:grid-cols-4 gap-4 mt-8 ">

        {/* Sidebar */}
        <div className="relative">
          <div className="space-y-6 bg-blue-50 p-4 rounded-lg sticky top-18">

            {/* Experience */}
            <div>
              <h3 className="font-semibold mb-2">By Experience (in Years)</h3>
              <div className="flex gap-2 mb-3">
                <input
                  type="number"
                  placeholder="1"
                  className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
                />
                <input
                  type="number"
                  placeholder="3"
                  className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
                />
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm border ">
                  RESET
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm ">
                  APPLY
                </button>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex gap-2">
                  <input type="checkbox" /> Bangalore
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Ahmedabad
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Kolkata
                </label>
              </div>
            </div>

            {/* Function */}
            <div>
              <h3 className="font-semibold mb-2">Function</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex gap-2">
                  <input type="checkbox" /> Technology
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Business
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Design
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="md:col-span-3 bg-mauve-100 p-4 rounded-lg">

          {/* Search */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 bg-white rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={()=> setSearch('')} className="text-blue-500 text-sm border px-3 bg-blue-50 py-2 rounded cursor-pointer">reset</button>
          </div>

          <p className="text-gray-600 mb-4">
            {filteredJobs.length} Openings found
          </p>
          {/* Job Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border border-blue-200 bg-white rounded p-4 hover:shadow-md transition relative group"
              >
                {/* Left blue border */}
                <div className="absolute left-0 top-0 h-full w-0.5 group-hover:w-2 group-hover:bg-blue-600 bg-blue-300 rounded-l transition-all duration-300"></div>
                <h2 className="font-semibold text-lg truncate">{job.title} </h2>
                <p className="text-sm text-gray-600 mt-1">Location: <span className="font-medium">{job.location}</span></p>
              </div>
            ))}
          </div>
          {/* Show More */}
          <div className="flex justify-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore, Karnataka",
    experience: 2,
    category: "Technology",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Bangalore, Karnataka",
    experience: 3,
    category: "Technology",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    experience: 1,
    category: "Design",
  },
  {
    id: 4,
    title: "Business Analyst",
    location: "Kolkata, West Bengal",
    experience: 4,
    category: "Business",
  },
  {
    id: 5,
    title: "Product Manager",
    location: "Bangalore, Karnataka",
    experience: 5,
    category: "Business",
  },
  {
    id: 6,
    title: "Software Engineer",
    location: "Ahmedabad, Gujarat",
    experience: 2,
    category: "Technology",
  },
];
