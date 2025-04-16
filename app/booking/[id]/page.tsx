// /app/booking/[id]/page.tsx
import BookingCard from "@/components/BookingCard";
import { fetchBookingById } from "@/lib/api";
import { PhoneCall, Car, CalendarClockIcon } from "lucide-react";

export default async function BookingDetails({
  params,
}: {
  params: { id: string };
}) {
  const booking = await fetchBookingById(params.id);

  if (!booking)
    return <div className="p-6 text-center">Booking not found!</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <BookingCard booking={booking}>
        <div className="flex items-center">
          <Car className="mr-2 h-4 w-4" />
          <span>Vehical Type: {booking.vehicle.type}</span>
        </div>
        <div className="flex items-center">
          <CalendarClockIcon className="mr-2 h-4 w-4" />
          <span>
            Pickup: {booking.pickupDate} & {booking.pickupTime}
          </span>
        </div>
        <div className="flex items-center">
          <CalendarClockIcon className="mr-2 h-4 w-4 rotate-180" />
          <span>
            Dropoff: {booking.dropoffDate} & {booking.dropoffTime}
          </span>
        </div>
        <div className="flex items-center">
          <PhoneCall className="mr-2 h-4 w-4" />
          <span>Contact No: {booking.customer.contactNumber}</span>
        </div>
        <div className="mt-6 flex items-center gap-4 justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
            Edit
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer">
            Cancel
          </button>
        </div>
      </BookingCard>
    </div>
  );
}
