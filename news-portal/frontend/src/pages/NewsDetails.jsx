import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

export default function NewsDetails() {
  const { id } = useParams();
  const [n, setN] = useState({});

  useEffect(() => {
    API.get(`/news/${id}`).then(res => setN(res.data));
  }, []);

  return <div><h1>{n.title}</h1><p>{n.content}</p></div>;
}