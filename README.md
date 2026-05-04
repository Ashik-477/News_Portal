📰 News Portal – MERN Stack Full-Stack Application

A modern full-stack news portal web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows users to read news, create their own posts, manage content, and handle authentication securely using JWT.

📌 Features

🏠 Public Features
Homepage with featured news sections
Top 6 trending news display
Category-based filtering system
Latest news section
Fully responsive UI


📰 News System
View all news articles
Single news detail page
Dummy + real API fallback system
Image support for news cards


🔐 Authentication
User registration & login
JWT-based authentication
Protected routes (Dashboard, Create News)


👤 User Features
Create news articles
Edit and delete own news
User profile management
Personal dashboard


📬 Extra Pages
Contact page
Professional header & footer layout


🧰 Tech Stack
Frontend
React.js (Vite)
Zustand (State Management)
React Router DOM
Tailwind CSS (via CDN)
Axios


Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcrypt.js

⚙️ Installation & Setup

1️⃣ Clone Repository
git clone https://github.com/your-username/news-portal.git
cd news-portal

2️⃣ Backend Setup
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run server:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🧪 Environment Variables

Backend .env

MONGO_URI=your_mongodb_url

JWT_SECRET=your_jwt_secret

PORT=5000

📡 API Endpoints

Auth

POST /api/auth/register

POST /api/auth/login

News

GET /api/news

GET /api/news/:id

POST /api/news (protected)

PUT /api/news/:id (protected)

DELETE /api/news/:id (protected)

User

GET /api/user/profile

PUT /api/user/profile


🖼️ UI Features
Hero featured news section
Category filtering system
Responsive news cards
Image-based article previews
Clean modern layout

🔐 Authentication Flow
User registers or logs in
JWT token is generated
Token stored in frontend state
Protected routes check token
User can create/edit/delete news

📦 Key Functionalities
Dynamic news rendering
Dummy fallback system for offline API
Protected dashboard system
CRUD operations for news
Responsive UI design

🚀 Future Improvements
Cloudinary image upload integration
Pagination & infinite scroll
Admin dashboard
Comment system
Real-time breaking news ticker
Email notifications

👨‍💻 Author

Ashik Talukder
Full-Stack Developer (MERN)
