export default function Careers() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Careers</h1>

      <p className="text-gray-600 mb-8">
        Join us in building the future of footwear. We’re a team of passionate
        creators, engineers, and thinkers shaping a modern e-commerce experience.
      </p>

      {/* Job Listings */}
      <div className="space-y-6">

        <div className="border p-5 rounded-lg hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Frontend Developer</h2>
          <p className="text-sm text-gray-500 mb-2">Remote • Full-time</p>
          <p className="text-gray-600 text-sm mb-3">
            Work on building scalable UI using React and Tailwind.
          </p>
          <button className="text-orange-500 text-sm">Apply Now →</button>
        </div>

        <div className="border p-5 rounded-lg hover:shadow-md transition">
          <h2 className="font-semibold text-lg">Backend Engineer</h2>
          <p className="text-sm text-gray-500 mb-2">Remote • Full-time</p>
          <p className="text-gray-600 text-sm mb-3">
            Design and maintain APIs using Node.js and MongoDB.
          </p>
          <button className="text-orange-500 text-sm">Apply Now →</button>
        </div>

        <div className="border p-5 rounded-lg hover:shadow-md transition">
          <h2 className="font-semibold text-lg">UI/UX Designer</h2>
          <p className="text-sm text-gray-500 mb-2">Hybrid • Contract</p>
          <p className="text-gray-600 text-sm mb-3">
            Craft intuitive and visually appealing user experiences.
          </p>
          <button className="text-orange-500 text-sm">Apply Now →</button>
        </div>

      </div>
    </div>
  );
}