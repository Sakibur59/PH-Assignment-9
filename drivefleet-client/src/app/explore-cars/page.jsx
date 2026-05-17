import CarCard from "@/components/CarCard";


const AllCarPage = async () => {
  const res = await fetch(`http://localhost:5000/cars`);
  const cars = await res.json();
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Explore All Cars</h1>
        <p>Find your next adventure among our curated selection of cars.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AllCarPage;