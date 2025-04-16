export interface BookingType {
    id: string,
    vehicle: { name: string, type: string },
    bookingDate: string,
    pickupDate: string,
    dropoffDate: string,
    pickupTime: string,
    dropoffTime: string,
    status: string,
    customer: { name: string, contactNumber: string },
}