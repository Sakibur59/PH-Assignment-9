'use client';
import { useState, useEffect } from 'react';
import CarCard from "@/components/CarCard";
import { Spinner } from '@heroui/react';

const CAR_TYPES = ['SUV', 'Sedan', 'Truck', 'Minivan', 'Hatchback', 'Van'];

const AllCarPage = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (selectedType) params.set('type', selectedType);

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars?${params.toString()}`)
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`); 
        return res.json();
      })
      .then(data => {
        setCars(Array.isArray(data) ? data : []); 
      })
      .catch(err => {
        console.error('Fetch failed:', err.message); 
        setCars([]); 
      })
      .finally(() => setLoading(false)); 

  }, [search, selectedType]);

  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Explore All Cars</h1>
        <p>Find your next adventure among our curated selection of cars.</p>
        <div className="flex gap-5 mt-6 shadow-sm p-5 rounded-md">
          <input
            type="text"
            placeholder="🔍 Search by car name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-md w-full max-w-4xl"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border px-4 py-2 rounded-md w-48"
          >
            <option value="">All Types</option>
            {CAR_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {loading ? (
          <div className="flex items-center justify-center ">
      <Spinner />
    </div>
        ) : cars.length === 0 ? (
          <p>No cars found.</p> 
        ) : (
          cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllCarPage;