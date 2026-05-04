import { useEffect, useMemo, useState } from "react";
import { useStore } from "../store/useStore";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const dummyNews = [
  {
    _id: "d1",
    title: "Breaking: Global Tech Shift",
    content: "Technology is evolving rapidly across industries.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d2",
    title: "Sports: Championship Update",
    content: "Exciting match ends with dramatic victory.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d3",
    title: "Health: New Study Released",
    content: "Researchers discover new health benefits.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d4",
    title: "World: Summit Announced",
    content: "Global leaders prepare for major summit.",
    category: "World",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
  },
];

  const { news, fetchNews } = useStore();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchNews();
  }, []);

  // 🔥 REAL + FALLBACK DATA (IMPORTANT FIX)
  const allNews = news?.length ? news : dummyNews;

  // Categories
  const categories = useMemo(() => {
    const unique = new Set(allNews.map((n) => n.category).filter(Boolean));
    return ["All", ...unique];
  }, [allNews]);

  // Hero
  const heroNews = allNews?.[0];

  // Top 6
  const topSix = allNews?.slice(1, 7);

  // Filtered
  const filteredNews =
    selectedCategory === "All"
      ? allNews
      : allNews.filter((n) => n.category === selectedCategory);

  return (
    <div className="space-y-10">

      {/* 🟣 HERO SECTION */}
      {heroNews && (
        <div className="bg-black text-white rounded-xl overflow-hidden grid md:grid-cols-2">
          
          <div className="p-6 flex flex-col justify-center">
            <span className="text-sm text-gray-300">Featured Story</span>
            <h1 className="text-3xl font-bold mt-2">{heroNews.title}</h1>
            <p className="text-gray-300 mt-3">
              {heroNews.content?.slice(0, 150)}...
            </p>

            <a
              href={`/news/${heroNews._id}`}
              className="mt-4 inline-block bg-white text-black px-4 py-2 rounded"
            >
              Read More
            </a>
          </div>

          <div className="h-64 md:h-auto">
            <img
  src={heroNews.image}
  alt="news"
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/800x400";
  }}
/>
          </div>
        </div>
      )}

      {/* 🟢 CATEGORIES */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🟡 TOP 6 */}
      <div>
        <h2 className="text-xl font-bold mb-3">Top Stories</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {topSix.map((n) => (
            <NewsCard key={n._id} item={n} />
          ))}
        </div>
      </div>

      {/* 🔵 LATEST NEWS */}
      <div>
        <h2 className="text-xl font-bold mb-3">
          {selectedCategory} News
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {filteredNews.map((n) => (
            <NewsCard key={n._id} item={n} />
          ))}
        </div>
      </div>

      {/* ⚫ ALWAYS VISIBLE LATEST SECTION */}
      <div>
        <h2 className="text-xl font-bold mb-3">Latest News</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {allNews.slice(0, 6).map((n) => (
            <NewsCard key={n._id} item={n} />
          ))}
        </div>
      </div>

    </div>
  );
}