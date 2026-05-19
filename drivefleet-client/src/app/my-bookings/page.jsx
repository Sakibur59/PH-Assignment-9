import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${email}`,
  );
  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto mb-10  p-5 mt-10">
      <h1 className="text-3xl font-bold mb-5">My Bookings</h1>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
            <Image
              src={booking.imageUrl}
              alt={booking.carName}
              height={200}
              width={200}
            />
            <div className="space-y-2">
              <h1 className="font-bold text-2xl">{booking.carName}</h1>

              <p className="text-sm text-gray-500">Booking Date:
                🗓️{new Date(booking.bookingDate).toLocaleString()}
              </p>

              <p>Booking Id: {booking._id}</p>
              <p>Driver Need: {booking.driverNeeded.toUpperCase()}</p>

              <p className="text-xl font-bold text-cyan-500">Price:
                ${booking.pricePerDay}/Day
              </p>

              <BookingCancelAlert bookingId={booking._id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
