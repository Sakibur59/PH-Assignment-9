import { AddCarDeleteAlert } from "@/components/AddCarDeleteModal";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyAddedCarPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const email = session?.user?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${email}`,
  );
  const cars = await res.json();

  return (
    <div className="mt-10 sm:mt-20 max-w-5xl mx-auto px-4 mb-10">
      <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">
        Private Layout
      </p>

     
      <div className="flex  justify-between items-center gap-3 mb-8">
        <h1 className="text-2xl sm:text-4xl font-black">My Added Cars</h1>
        <Link
          href="/add-car"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-cyan-500 text-white text-sm sm:text-base rounded-md shadow hover:bg-cyan-600 transition"
        >
          + Add New Car
        </Link>
      </div>

      {!cars?.length ? (
        <p>No cars added yet.</p>
      ) : (
        <div className="space-y-5">
          {cars.map((car) => (
            <div
              key={car._id}
              className="flex flex-col sm:flex-row gap-4 border rounded-lg p-5"
            >
             
              <div className="">
                <Image
                  src={car.imageUrl}
                  alt={car.carName}
                  height={200}
                  width={200}
                  className="w-full sm:w-[200px] h-48 sm:h-[200px] object-cover rounded-md"
                />
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex  justify-between items-start gap-2">
                  <h2 className="font-bold text-xl sm:text-2xl">
                    {car.carName}
                  </h2>
                  <div className="flex gap-2 ">
                    <EditModal car={car} />
                    <AddCarDeleteAlert carId={car._id} />
                  </div>
                </div>

                <p className="text-lg sm:text-xl font-bold text-cyan-500">
                  Price: ${car.pricePerDay}/Day
                </p>
                <p className="text-sm sm:text-base">Brand: {car.brand}</p>
                <p className="text-sm sm:text-base">Category: {car.category}</p>
                <p className="text-sm sm:text-base">
                  Availability: {car.availability.toUpperCase()}
                </p>
                <p className="text-sm sm:text-base line-clamp-3">
                  Car Description: {car.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedCarPage;
