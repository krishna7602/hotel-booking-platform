# Hotel Booking Application

This project is a full-stack hotel booking application built with React for the frontend and Node.js with Express for the backend. The application allows users to view, book, and manage hotel reservations.

## Folder Structure

```
hotel-booking/
│
├── Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── Middleware/
│   ├── db/
│   ├── .env
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── Pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── index.jsx
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── .gitignore
```

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Login a user.

### Hotel Routes

- **POST /api/hotels**: Add a new hotel.
- **GET /api/hotels**: Get all hotels.

## Photos

![Home Page](./photos/home-page.png)
![Hotel Details](./photos/hotel-details.png)

## Getting Started

### Backend

1. Navigate to the `Backend` directory.
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Frontend

1. Navigate to the `Frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Environment Variables

Create a `.env` file in the `Backend` directory with the following content:

```
PORT=8000
MONGO_URI=mongodb://localhost:27017/hotel
JWT_SECRET=secret
```

Create a `.env` file in the `Frontend` directory with the following content:

```
VITE_BASE_URL=http://localhost:8000
```
