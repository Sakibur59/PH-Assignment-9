import { AddCarDeleteAlert } from "@/components/AddCarDeleteModal";
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
    <div className="mt-20 max-w-5xl mx-auto px-4">
      <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">
        Private Layout
      </p>
      <h1 className="text-4xl font-black mb-8">My Added Cars</h1>
      

      {!cars?.length ? (
        <p>No cars added yet.</p>
      ) : (
        <div className="space-y-5">
          {cars.map((car) => (
            <div key={car._id} className="flex gap-5 border p-5 min-w-3xl">
              <Image
                src={car.imageUrl}
                alt={car.carName}
                height={200}
                width={200}
              />
              <div className="space-y-2">
                <h1 className="font-bold text-2xl">{car.carName}</h1>

                <p className="text-xl font-bold text-cyan-500">
                  Price: ${car.pricePerDay}/Day
                </p>
                <p>Brand: {car.brand}</p>
                <p>Category: {car.category}</p>
                <p>Availability: {car.availability.toUpperCase()}</p>

                <AddCarDeleteAlert carId={car._id} />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end mt-10">
        <Link href="/add-car" className="inline-block mb-6 px-6 py-3 bg-cyan-500 text-white rounded-md shadow hover:bg-cyan-600 transition">
          + Add New Car
        </Link>
      </div>
    </div>
  );
};

export default MyAddedCarPage;
