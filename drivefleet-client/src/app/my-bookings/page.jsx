import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();

  return (
    <div className="md:max-w-7xl mx-auto mb-10  p-5 mt-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5">My Bookings</h1>
      {!bookings?.length ? (
        <p>You have no bookings yet.</p>
      ) : (
        <div className="space-y-5">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col sm:flex-row gap-4 border rounded-lg p-5"
            >
              <Image
                src={booking.imageUrl}
                alt={booking.carName}
                height={200}
                width={200}
                className="w-full sm:w-[200px] h-48 sm:h-[200px] object-cover rounded-md"
              />
              <div className="flex-1 min-w-0 md:min-w-xl space-y-2">
                <div className="space-y-2 ">
                  <h1 className="font-bold text-2xl">{booking.carName}</h1>

                  <p className="text-sm text-gray-500">
                    Booking Date: 🗓️
                    {new Date(booking.bookingDate).toLocaleString()}
                  </p>

                  <p>Booking Id: {booking._id}</p>
                  <p>Driver Need: {booking.driverNeeded.toUpperCase()}</p>

                  <p className="text-xl font-bold text-cyan-500">
                    Price: ${booking.pricePerDay}/Day
                  </p>

                  <div className="mt-3 sm:mx-auto">
                    <BookingCancelAlert bookingId={booking._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
