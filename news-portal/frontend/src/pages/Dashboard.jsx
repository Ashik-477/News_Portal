import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";

export default function Dashboard() {
  const { user, getProfile, createNews, getMyNews, news } = useStore();
  const [form, setForm] = useState({});

  useEffect(() => {
    getProfile();
    getMyNews();
  }, []);

  return (
    <div>
      <h1>Welcome {user?.name}</h1>

      <h2>Create News</h2>
      <input placeholder="title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button onClick={() => createNews(form)}>
        Publish
      </button>

      <h2>My News</h2>
      {news?.map((n) => (
        <div key={n._id}>
          <p>{n.title}</p>
        </div>
      ))}
    </div>
  );
}