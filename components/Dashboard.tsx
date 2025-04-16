// /app/dashboard/page.tsx (or /pages/dashboard.tsx if using pages router)
import { fetchBookings } from "@/lib/api";
import BookingCard from "@/components/BookingCard";

export default async function Dashboard() {
  const bookings = await fetchBookings();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vehicle Booking Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </main>
  );
}
