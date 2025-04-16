"use client";

import { useState } from "react";
import { parseISO } from "date-fns";
import { fetchBookings } from "@/lib/api";
import BookingCard from "@/components/BookingCard";

export default async function Dashboard() {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dateRange, setDateRange] = useState<
    { from: Date | undefined; to?: Date | undefined } | undefined
  >(undefined);
  const bookings = await fetchBookings();

  const filteredBookings = bookings.filter((booking) => {
    const pickupDate = parseISO(booking.pickup.date);
    const dropoffDate = parseISO(booking.dropoff.date); // Parse dropoff date

    const isInDateRange =
      !dateRange ||
      (!dateRange.from && !dateRange.to) ||
      (dateRange.from &&
        !dateRange.to &&
        (pickupDate >= dateRange.from || dropoffDate >= dateRange.from)) ||
      (dateRange.to &&
        !dateRange.from &&
        (pickupDate <= dateRange.to || dropoffDate <= dateRange.to)) ||
      (dateRange.from &&
        dateRange.to &&
        pickupDate >= dateRange.from &&
        pickupDate <= dateRange.to)
    //   (dropoffDate >= dateRange.from && dropoffDate <= dateRange.to);

    return isInDateRange;
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl text-center font-bold mb-4">
        Vehicle Booking Dashboard
      </h1>
      <div className="">
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
        <input
          type="date"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </main>
  );
}
{
  /* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredBookings.map((booking) => (
                            <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </div>
                    {filteredBookings.length === 0 && (
                        <div className="mt-8 text-center text-gray-500">
                            No bookings found matching your search.
                        </div>
                    )}
                </div> */
}
