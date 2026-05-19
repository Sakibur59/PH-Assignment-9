import { BookingModal } from "@/components/BookingModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { LuMapPin, LuUsersRound } from "react-icons/lu";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;
  const [carRes, countRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings-count/${id}`, {
      cache: "no-store",
    }),
  ]);
  const car = await carRes.json();
  const { count } = await countRes.json();
  const {
    _id,
    carName,
    category,
    imageUrl,
    pricePerDay,
    location,
    fuelType,
    description,
    availability,
    seatingCapacity,
  } = car;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 max-w-7xl mx-auto">
        <div className="shadow p-10">
          <Image
            src={imageUrl}
            alt={carName}
            width={800}
            height={600}
            className=" h-auto object-cover"
          ></Image>
        </div>
        <div className="shadow p-10 rounded-md h-full">
          <h1 className="text-3xl font-bold mt-5">{carName}</h1>
          <p className="text-gray-500 mt-2">{description}</p>
          <div className="flex items-center gap-10 mt-4">
            <h3 className="text-lg font-semibold text-cyan-600">
              Category: {category}
            </h3>
            <p className="font-bold">FuelType: {fuelType}</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <LuMapPin className="text-gray-500" />
            <span className="text-gray-500">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuUsersRound className="text-gray-500" />
            <span className="text-gray-500">{seatingCapacity} Seats</span>
          </div>

          <h2 className="text-xl font-semibold mt-4">${pricePerDay}/Day</h2>
          <p className="text-gray-500 mt-2">
            Availability: {availability ? "Available" : "Not Available"}
          </p>

          <div className="flex items-center gap-2 ">
            <span>🧳</span>
            <span>
              <strong className="text-black">Total Booked: {count}</strong>
            </span>
          </div>

          <BookingModal car={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
