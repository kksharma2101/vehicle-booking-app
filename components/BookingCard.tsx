// /components/BookingCard.tsx
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { BookingType } from "@/types/apiDataType";
import { CalendarIcon, Car, MapPin, Users } from "lucide-react";

interface BookingCardProps {
  booking: BookingType;
  children?: React.ReactNode; // Optional children
}

export default function BookingCard({ booking, children }: BookingCardProps) {
  return (
    <div className="bg-white max-w-md p-4 rounded shadow hover:shadow-md transition">
      <div className="text-sm text-gray-700">
        <div className="flex items-center justify-between my-3">
        <div className="flex items-center">
          <Car className="mr-2 h-5 w-5" />
          <span className="font-bold">{booking.vehicle.name}</span>
        </div>
        <p className="text-sm text-gray-500">Booking ID: {booking.id}</p>
        </div>
        <div className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Booking Date: {booking.bookingDate}</span>
        </div>
        <div className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          <span>Customer: {booking.customer.name}</span>
        </div>

        {children}

        <div className="mt-3">
          <StatusBadge status={booking.status} />
        </div>

        {!children ? (
          <Link
            href={`/booking/${booking.id}`}
            className="flex justify-end mt-3 text-blue-600 hover:underline text-sm"
          >
            View Details
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
