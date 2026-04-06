export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How to Choose the Perfect Running Shoes",
      desc: "A complete guide to picking shoes that match your running style.",
    },
    {
      id: 2,
      title: "Top 5 Casual Sneakers in 2026",
      desc: "Discover trending styles that combine comfort and fashion.",
    },
    {
      id: 3,
      title: "Formal Shoes: Style Meets Elegance",
      desc: "Upgrade your wardrobe with the perfect formal footwear.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <p className="text-gray-600 mb-8">
        Explore insights, trends, and tips from the world of footwear and fashion.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-5 hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{post.desc}</p>
            <button className="text-orange-500 text-sm">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}