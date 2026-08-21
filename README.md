# Expense-Manager
A full-stack expense tracking web application that allows users to add, view, and delete expenses with real-time updates.
Includes an AI-style natural language input feature for quick expense entry.

## Features
- Add, view and delete expenses
- Real-time updates
- Clean responsive UI
- REST API backend
- MongoDB cloud database
- AI-style expense parsing (mocked for now)

## Tech Stack
**Frontend:**
- React (Vite)
- CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB Atlas

**Deployment:**
- Frontend: Vercel
- Backend: Node/Express (deployed and tested during development — see note below)

## Deployment Note
This project was fully built, deployed, and tested end-to-end during development — frontend on Vercel, backend on Node/Express with a MongoDB Atlas database, connected via a REST API with proper CORS configuration.

The live link isn't currently active due to short-lived free-tier hosting limits on the platforms used. The code is fully functional locally:

```bash
# Backend
cd backend
npm install
# Add a .env file with your own MONGO_URI
npm start

# Frontend
cd frontend
npm install
npm run dev
```

## AI (Planned Features)
The project includes an AI parsing endpoint designed for natural language expense input. Currently uses rule-based parsing for demonstration; can be upgraded to live LLM inference.

## What I Learned
- Building REST APIs using Express
- Connecting frontend with backend
- Working with MongoDB Atlas
- Debugging full-stack deployment issues (CORS configuration, environment variable handling, database authentication)
