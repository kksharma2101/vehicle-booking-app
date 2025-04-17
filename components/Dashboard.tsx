"use client";

import { useEffect, useState } from "react";
import { parseISO, isWithinInterval, endOfDay, startOfDay } from "date-fns";
import { fetchBookings } from "@/lib/api";
import BookingCard from "@/components/BookingCard";

export default function Dashboard() {
  const [bookings, setBookings] = useState<typeof fetchBookings>([]);
  const [dateRange, setDateRange] = useState<{
    from?: string;
    to?: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = fetchBookings;
        setBookings(data);
      } catch (error) {
        console.log("Error in fetch Booking data", error);
      }
    };
    fetchData();
  }, []);

  // Booking Filter function
  function filterBookings() {
    return bookings.filter((booking) => {
      // Date range filtering
      const pickupDate = parseISO(booking.pickup.date);
      const dropoffDate = parseISO(booking.dropoff.date);

      let dateInRange = true;
      if (dateRange?.from || dateRange?.to) {
        const fromDate = dateRange.from
          ? startOfDay(parseISO(dateRange.from))
          : null;
        const toDate = dateRange.to ? endOfDay(parseISO(dateRange.to)) : null;

        if (fromDate && toDate) {
          dateInRange =
            isWithinInterval(pickupDate, { start: fromDate, end: toDate }) ||
            isWithinInterval(dropoffDate, { start: fromDate, end: toDate });
        } else if (fromDate) {
          dateInRange = pickupDate >= fromDate || dropoffDate >= fromDate;
        } else if (toDate) {
          dateInRange = pickupDate <= toDate || dropoffDate <= toDate;
        }
      }

      return dateInRange;
    });
  }

  const filteredBookings = filterBookings();

  return (
    <main className="p-6">
      <h1 className="text-2xl text-center font-bold mb-4">
        Vehicle Booking Dashboard
      </h1>
      <div className="">
        <h3 className="">Filter the booking by Date</h3>
        <div className="flex max-w-2xl my-2 sm:items-center gap-2">
          <input
            type="date"
            id="fromDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            value={dateRange.from || ""}
            onChange={(e) =>
              setDateRange({ ...dateRange, from: e.target.value })
            }
          />
          <input
            type="date"
            id="toDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            value={dateRange.to || ""}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            min={dateRange.from} // Ensures "to" date can't be before "from" date
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
      {filteredBookings.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          No bookings found matching your search.
        </div>
      )}
    </main>
  );
}
