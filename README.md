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

## Photos
![Screenshot 2025-02-26 003947](https://github.com/user-attachments/assets/7e02518a-b99d-4924-9c39-7e319ef1c228)
![Screenshot 2025-02-26 004149](https://github.com/user-attachments/assets/b7e8dc98-481e-4a13-852d-953661c415b6)
![Screenshot 2025-02-26 004202](https://github.com/user-attachments/assets/93e7d280-8529-43af-a8ef-f4fce6e347fc)
![Screenshot 2025-02-26 004213](https://github.com/user-attachments/assets/3ec8d548-d02b-40bd-9a8c-7c48fdf0da19)
![Screenshot 2025-02-26 004222](https://github.com/user-attachments/assets/2f9645a9-8474-4df1-8269-e3487137f42a)




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

