import mongoose from "mongoose";
import dotenv from "dotenv";
import News from "../models/News.js";

dotenv.config();

const seedNews = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected for seeding...");

    
    await News.deleteMany();

    await News.insertMany([
      {
        title: "Breaking: AI is changing the world",
        content: "AI tools are transforming industries globally.",
        category: "Technology",
        image: "https://via.placeholder.com/600x400",
      },
      {
        title: "Sports Update: Big win today",
        content: "Local team wins championship match.",
        category: "Sports",
        image: "https://via.placeholder.com/600x400",
      },
      {
        title: "Politics: New reforms announced",
        content: "Government introduces new policy changes.",
        category: "Politics",
        image: "https://via.placeholder.com/600x400",
      },
      {
        title: "Health: New research breakthrough",
        content: "Scientists discover new treatment method.",
        category: "Health",
        image: "https://via.placeholder.com/600x400",
      },
      {
        title: "World News: Global summit held",
        content: "Leaders meet to discuss climate action.",
        category: "World",
        image: "https://via.placeholder.com/600x400",
      },
    ]);

    console.log("Seed data inserted successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedNews();