export interface BookingType {
    id: string,
    vehicle: { name: string, type: string },
    bookingDate: string,
    pickup: { date: string, time: string },
    dropoff: { date: string, time: string },
    status: string,
    customer: { name: string, contactNumber: string },
}