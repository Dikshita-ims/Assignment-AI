# Assignment AI 🚀

An AI-powered assignment generation platform built with **Next.js, Node.js, MongoDB, BullMQ, Redis, and Socket.IO**.

This platform allows teachers or educators to generate structured assignments dynamically using AI with real-time generation updates and cloud deployment support.

---

# 🌐 Live Demo

## Frontend

https://assignment-gktyc2giq-dikshita-s-projects.vercel.app

## Backend API

https://assignment-ai-backend.onrender.com

---

# ✨ Features

* AI-powered assignment generation
* Real-time assignment generation status using Socket.IO
* Dynamic question configuration
* Queue-based background processing with BullMQ
* MongoDB Atlas database integration
* Redis-powered job queue system
* Responsive modern UI with Next.js + Tailwind CSS
* Cloud deployment using Render + Vercel
* Fallback mock generation system when AI quota fails

---

# 🛠 Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Socket.IO Client

## Backend

* Node.js
* Express.js
* TypeScript
* BullMQ
* Redis
* Socket.IO

## Database & Cloud

* MongoDB Atlas
* Render
* Vercel

## AI

* Google Gemini API

---

# ⚙️ Architecture

User creates assignment
↓
Frontend sends request to backend
↓
BullMQ queue creates background job
↓
Worker processes assignment generation
↓
Gemini AI generates questions
↓
MongoDB stores assignment
↓
Socket.IO sends live updates to frontend
↓
Frontend displays generated assignment

---

# 📂 Project Structure

```bash
Assignment-AI/
│
├── client/          # Next.js Frontend
│
├── server/          # Express Backend
│
├── MongoDB Atlas
│
└── Redis Queue
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Assignment-AI.git
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

REDIS_URL=YOUR_REDIS_URL
```

---

## Frontend (.env.local)

```env
NEXT_PUBLIC_BACKEND_URL=https://assignment-ai-backend.onrender.com
```

---

# 📸 Screenshots

Add screenshots here:

* Dashboard
* Assignment Creation Page
* Generation Page
* Output Page

---

# 🔥 Challenges Faced

* Redis deployment and connection handling
* BullMQ TypeScript compatibility issues
* Real-time Socket.IO integration
* Monorepo deployment configuration
* Vercel root directory configuration
* Render deployment debugging

---

# 📈 Future Improvements

* PDF export support
* Authentication system
* Teacher dashboard analytics
* Assignment history management
* AI-generated answer keys
* Student submission portal

---

