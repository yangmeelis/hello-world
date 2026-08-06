# Hello World - Full Stack Developer Project

A modern full-stack application with Node.js/Express backend, React frontend, and MongoDB database.

## Project Structure

```
├── backend/          # Express.js API server
├── frontend/         # React application
├── config/           # Configuration files
├── docker-compose.yml
└── .env.example
```

## Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- npm or yarn

### Installation

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the Application

```bash
# Using Docker Compose
docker-compose up

# Or run locally
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm start
```

## API Documentation

API runs on `http://localhost:5000`
Frontend runs on `http://localhost:3000`

## Features

- RESTful API with Express.js
- React frontend with hooks
- MongoDB database integration
- Docker containerization
- Environment configuration
