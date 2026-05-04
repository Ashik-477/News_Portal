import { useEffect } from "react";
import { useStore } from "../store/useStore";
import NewsCard from "../components/NewsCard";

export default function News() {
  const { news, fetchNews } = useStore();

  useEffect(() => {
    fetchNews();
  }, []);

  // 🧠 Dummy fallback (same as Home)
  const dummyNews = [
    {
      _id: "d1",
      title: "Breaking: Global Tech Shift",
      content: "Technology is evolving rapidly across industries.",
      category: "Tech",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      _id: "d2",
      title: "Sports: Championship Update",
      content: "Exciting match ends with dramatic victory.",
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      _id: "d3",
      title: "Health: New Study Released",
      content: "Researchers discover new health benefits.",
      category: "Health",
      image:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    },
     {
    _id: "d4",
    title: "World Leaders Meet for Climate Summit",
    content: "Discussions focus on global emissions reduction.",
    category: "World",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d5",
    title: "Stock Markets Hit Record High",
    content: "Investors react positively to economic growth.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d6",
    title: "Space Mission Successfully Launched",
    content: "New satellite enters orbit for research.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d7",
    title: "Entertainment Awards Night Highlights",
    content: "Top actors celebrated at annual ceremony.",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "d8",
    title: "New Smartphone Breaks Sales Records",
    content: "Consumers rush to buy latest model.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  
  {
    _id: "d10",
    title: "Breakthrough in Renewable Energy",
    content: "Solar efficiency reaches new milestone.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  ];

  // 🔥 REAL OR FALLBACK
  const allNews = news?.length ? news : dummyNews;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-5">All News</h1>

      {/* GRID FIX (IMPORTANT) */}
      <div className="grid md:grid-cols-3 gap-4">
        {allNews.map((n) => (
          <NewsCard key={n._id} item={n} />
        ))}
      </div>
    </div>
  );
}