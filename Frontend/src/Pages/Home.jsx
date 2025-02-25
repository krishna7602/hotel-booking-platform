import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hotels data from the provided JSON
    const fetchHotels = async () => {
    const response = await axios.get('/assets/hotel.json');
    console.log(response.data.hotels);
      setHotels(response.data.hotels);
    };
    fetchHotels();
  }, []);

  const handleHotelClick = async (hotel) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/hotels`, hotel);
      if (response.status === 200) {
        navigate(`/hotel/${hotel.id}`);
      }
    } catch (error) {
      console.error('Error storing hotel details:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={hotel.image_url} alt={hotel.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
            <p className="text-gray-700 mb-2">{hotel.location}</p>
            <p className="text-gray-700 mb-2">Price per night: ${hotel.price_per_night}</p>
            <p className="text-gray-700 mb-2">Rating: {hotel.rating}</p>
            <p className="text-gray-700 mb-2">Availability: {hotel.availability ? 'Available' : 'Not Available'}</p>
            <button
              onClick={() => handleHotelClick(hotel)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
