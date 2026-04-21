export default function Card({ image, title, tag }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
      />

      {tag && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {tag}
        </span>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
        {title}
      </div>
    </div>
  );
}