import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow bg-white">

      {/* IMAGE FIX (CRITICAL) */}
      <img
        src={item?.image || "https://via.placeholder.com/400x250"}
        alt="news"
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/400x250";
        }}
      />

      <div className="p-3">
        <h2 className="font-bold text-lg">
          {item?.title}
        </h2>

        <p className="text-sm text-gray-600">
          {item?.content?.slice(0, 80)}...
        </p>

        <Link
          to={`/news/${item?._id}`}
          className="text-blue-500 mt-2 inline-block"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}