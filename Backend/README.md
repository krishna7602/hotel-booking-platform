# Backend - Hotel Booking Application

This is the backend part of the Hotel Booking Application built with Node.js and Express.

## Folder Structure

```
Backend/
├── Controllers/
│   └── user.controller.js
├── Models/
│   ├── hotel.model.js
│   └── user.model.js
├── Routes/
│   ├── hotel.routes.js
│   └── user.routes.js
├── Middleware/
│   └── auth.middleware.js
├── db/
│   └── db.js
├── .env
├── app.js
├── server.js
├── package.json
└── package-lock.json
```

## Getting Started

1. Install dependencies: `npm install`
2. Start the server: `npm start`

## Environment Variables

Create a `.env` file in the `Backend` directory with the following content:

```
PORT=8000
MONGO_URI=mongodb://localhost:27017/hotel
JWT_SECRET=secret
```

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Login a user.

### Hotel Routes

- **POST /api/hotels**: Add a new hotel.
- **GET /api/hotels**: Get all hotels.


