export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="text-gray-600 mb-6 leading-relaxed">
        At ShoeStore, we believe that every step tells a story. From everyday comfort
        to performance-driven footwear, our mission is to bring you shoes that combine
        style, quality, and durability.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Founded with a passion for design and innovation, we curate collections that
        fit every lifestyle — whether you're running, working, or making a statement.
      </p>

      {/* Vision Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">Our Vision</h2>
          <p className="text-gray-600 text-sm">
            To become a global destination for footwear that blends innovation,
            comfort, and timeless design.
          </p>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg mb-2">Our Mission</h2>
          <p className="text-gray-600 text-sm">
            Deliver high-quality shoes that empower people to move confidently
            in every part of life.
          </p>
        </div>
      </div>
    </div>
  );
}