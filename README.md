# 🚀 Fullstack Modern Task Manager

A modern fullstack task management application built using React, Redux Toolkit, Node.js, Express, and MongoDB.

This application allows users to create, delete, prioritize, and reorder tasks with persistent database storage and a clean responsive UI.

---

# 📌 Features

## ✅ Frontend Features

* Add new tasks
* Delete tasks
* Drag & drop task reordering
* Priority-based task management
* Dark/Light theme toggle
* Responsive modern UI
* Optimistic UI updates for smooth drag experience

---

## ✅ Backend Features

* REST API integration
* MongoDB database persistence
* Task order persistence
* Express.js API routes
* Mongoose schema modeling

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Redux Toolkit
* Axios
* @hello-pangea/dnd
* CSS

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS

---

# 📂 Project Structure

```bash
fullstack-modern-task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── features/
│   │   │   └── tasks/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/janhaviagrawal1/fullstack-modern-task-manager.git
```

---

# 🚀 Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🚀 Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create .env file

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Start backend server

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 📡 API Endpoints

## GET Tasks

```http
GET /api/tasks
```

## CREATE Task

```http
POST /api/tasks
```

## DELETE Task

```http
DELETE /api/tasks/:id
```

## REORDER Tasks

```http
PUT /api/tasks/reorder
```

---

# 🧠 Key Implementations

## 🔥 Optimistic UI Updates

Implemented optimistic rendering for drag-and-drop functionality to provide instant visual feedback while asynchronously persisting changes to the backend.

---

## 🔥 Persistent Task Ordering

Task positions are stored in MongoDB using an `order` field to maintain drag-and-drop positions even after page refresh.

---

## 🔥 Redux Toolkit State Management

Used Redux Toolkit with async thunks for scalable and maintainable frontend state management.

---

# 📸 Future Enhancements

* User Authentication
* Task Categories
* Due Dates & Reminders
* AI-based Smart Prioritization
* Real-time Collaboration
* PWA Support

---

# 👩‍💻 Author

Janhavi Agrawal

GitHub:

[https://github.com/janhaviagrawal1](https://github.com/janhaviagrawal1)

---

# ⭐ Project Highlights

* Fullstack MERN Architecture
* Modern React Hooks
* Drag & Drop Functionality
* MongoDB Integration
* RESTful APIs
* Responsive UI
* Persistent Database Storage
* Production-style Folder Structure

---

# 📄 License

This project is open-source and available for learning and educational purposes.
