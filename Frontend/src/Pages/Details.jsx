import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`/assets/hotel.json`);
        const hotelData = response.data.hotels.find(hotel => hotel.id === parseInt(id));
        setHotel(hotelData);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };
    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img src={hotel.image_url} alt={hotel.name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
        <p className="text-gray-700 mb-2">{hotel.location}</p>
        <p className="text-gray-700 mb-2">Price per night: ${hotel.price_per_night}</p>
        <p className="text-gray-700 mb-2">Rating: {hotel.rating}</p>
        <p className="text-gray-700 mb-2">Availability: {hotel.availability ? 'Available' : 'Not Available'}</p>
        <p className="text-gray-700 mb-2">Tagline: {hotel.tagline}</p>
        <p className="text-gray-700 mb-4">{hotel.description}</p>
        <h2 className="text-2xl font-bold mb-2">Amenities</h2>
        <ul className="list-disc list-inside mb-4">
          {hotel.amenities.map((amenity, index) => (
            <li key={index} className="text-gray-700">{amenity}</li>
          ))}
        </ul>
      </div>
      <button onClick={()=>{
        alert('Booking Successful')
      }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
        Book Now
      </button>
    </div>
  );
};

export default Details;
