// /lib/api.ts
export const fetchBookings = async () => {
  return [
    {
      id: 'BOOK001',
      vehicle: { name: 'Toyota Camry', type: 'car' },
      bookingDate: '2025-04-16',
      pickupDate: '2025-04-17',
      dropoffDate: '2025-04-20',
      pickupTime: '10:00 AM',
      dropoffTime: '06:00 PM',
      status: 'Confirmed',
      customer: { name: 'John Doe', contactNumber: '+91 9876543210' },
    },
    {
      id: 'BOOK002',
      vehicle: { name: 'Honda Civic', type: 'car' },
      bookingDate: '2025-04-25',
      pickupDate: '2025-04-26',
      dropoffDate: '2025-04-28',
      pickupTime: '02:00 PM',
      dropoffTime: '06:00 PM',
      status: 'Pending',
      customer: { name: 'Alice Smith', contactNumber: '+91 8765432190' },
    },
    {
      id: 'BOOK003',
      vehicle: { name: 'Toyota Hiace', type: 'van' },
      bookingDate: '2025-05-01',
      pickupDate: '2025-05-02',
      dropoffDate: '2025-05-05',
      pickupTime: '09:00 AM',
      dropoffTime: '05:00 PM',
      status: 'Confirmed',
      customer: { name: 'Bob Williams', contactNumber: '+1 555-123-4567' },
    },
    {
      id: 'BOOK004',
      vehicle: { name: 'Royal Enfield Himalayan', type: 'bike' },
      bookingDate: '2025-05-03',
      pickupDate: '2025-05-04',
      dropoffDate: '2025-05-06',
      pickupTime: '11:00 AM',
      dropoffTime: '07:00 PM',
      status: 'Cancelled',
      customer: { name: 'Carol Johnson', contactNumber: '+44 7777 123456' },
    },
    {
      id: 'BOOK005',
      vehicle: { name: 'Ford Mustang', type: 'car' },
      bookingDate: '2025-05-08',
      pickupDate: '2025-05-09',
      dropoffDate: '2025-05-12',
      pickupTime: '12:00 PM',
      dropoffTime: '08:00 PM',
      status: 'Confirmed',
      customer: { name: 'David Brown', contactNumber: '+61 412 345 678' },
    },
  ];
};

export const fetchBookingById = async (id: string) => {
  const bookings = await fetchBookings();
  return bookings.find((b) => b.id === id);
};
