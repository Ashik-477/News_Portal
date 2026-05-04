import News from "../models/News.js";

export const getAllNews = async (req, res) => {
  const news = await News.find().populate("author");
  res.json(news);
};

export const getTopNews = async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 }).limit(6);
  res.json(news);
};

export const getSingleNews = async (req, res) => {
  const news = await News.findById(req.params.id);
  res.json(news);
};

export const createNews = async (req, res) => {
  const news = await News.create({ ...req.body, author: req.user.id });
  res.json(news);
};

export const updateNews = async (req, res) => {
  const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(news);
};

export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.send("Deleted");
};