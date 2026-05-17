import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuMap, LuMapPin, LuUsersRound } from "react-icons/lu";


const CarCard = ({ car }) => {
  const {
    _id,
    carName,
    category,
    imageUrl,
    pricePerDay,
    location,
    description,
    availability,
    seatingCapacity,
  } = car;
  return (
    <div className="border mb-8 rounded-md  shadow-lg">
      <Image
        src={imageUrl}
        alt={carName}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <h3 className="font-bold text-cyan-600">{category}</h3>
        </div>
        <div className="flex justify-between ">
          <div>
            <div>
              <h2 className="text-xl font-bold">{carName}</h2>
            </div>
            <p className="text-gray-500 mt-2 ">{description}</p>
            <div className="flex items-center  mt-2">
              <LuMapPin className="text-gray-500" />
              <span className="text-gray-500 ml-1">{location}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <LuUsersRound />
              <p className="text-gray-500">{seatingCapacity} Seats</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">${pricePerDay}/Day</h3>
          </div>
        </div>

        <Link href={`/explore-cars/${_id}`} >
          <Button variant="primary" className="mt-3 text-white w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
