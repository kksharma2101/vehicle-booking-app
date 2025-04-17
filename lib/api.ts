
// /lib/api.ts
// export const fetchBookings = async () => {
//   return [
//     {
//       id: 'BOOK001',
//       vehicle: { name: 'Toyota Camry', type: 'car' },
//       bookingDate: '2025-04-16',
//       pickup: { date: '2025-04-17', time: '10:00 AM' },
//       dropoff: { date: '2025-04-20', time: '06:00 PM' },
//       status: 'Confirmed',
//       customer: { name: 'John Doe', contactNumber: '+91 9876543210' },
//     },
//     {
//       id: 'BOOK002',
//       vehicle: { name: 'Honda Civic', type: 'car' },
//       bookingDate: '2025-04-25',
//       pickup: { date: '2025-04-26', time: '11:00 AM' },
//       dropoff: { date: '2025-04-28', time: '05:00 PM' },
//       status: 'Pending',
//       customer: { name: 'Alice Smith', contactNumber: '+91 8765432190' },
//     },
//     {
//       id: 'BOOK003',
//       vehicle: { name: 'Toyota Hiace', type: 'van' },
//       bookingDate: '2025-05-01',
//       pickup: { date: '2025-05-02', time: '08:00 AM' },
//       dropoff: { date: '2025-05-05', time: '04:00 PM' },
//       status: 'Confirmed',
//       customer: { name: 'Bob Williams', contactNumber: '+1 555-123-4567' },
//     },
//     {
//       id: 'BOOK004',
//       vehicle: { name: 'Royal Enfield Himalayan', type: 'bike' },
//       bookingDate: '2025-05-03',
//       pickup: { date: '2025-05-04', time: '09:00 AM' },
//       dropoff: { date: '2025-05-07', time: '03:00 PM' },
//       status: 'Cancelled',
//       customer: { name: 'Carol Johnson', contactNumber: '+44 7777 123456' },
//     },
//     {
//       id: 'BOOK005',
//       vehicle: { name: 'Ford Mustang', type: 'car' },
//       bookingDate: '2025-05-08',
//       pickup: { date: '2025-05-09', time: '01:00 PM' },
//       dropoff: { date: '2025-05-12', time: '09:00 PM' },
//       status: 'Confirmed',
//       customer: { name: 'David Brown', contactNumber: '+61 412 345 678' },
//     },
//   ];
// };

export const fetchBookings = [
  {
    id: 'BOOK001',
    vehicle: { name: 'Toyota Camry', type: 'car' },
    bookingDate: '2025-04-16',
    pickup: { date: '2025-04-17', time: '10:00 AM' },
    dropoff: { date: '2025-04-20', time: '06:00 PM' },
    status: 'Confirmed',
    customer: { name: 'John Doe', contactNumber: '+91 9876543210' },
  },
  {
    id: 'BOOK002',
    vehicle: { name: 'Honda Civic', type: 'car' },
    bookingDate: '2025-04-25',
    pickup: { date: '2025-04-26', time: '11:00 AM' },
    dropoff: { date: '2025-04-28', time: '05:00 PM' },
    status: 'Pending',
    customer: { name: 'Alice Smith', contactNumber: '+91 8765432190' },
  },
  {
    id: 'BOOK003',
    vehicle: { name: 'Toyota Hiace', type: 'van' },
    bookingDate: '2025-05-01',
    pickup: { date: '2025-05-02', time: '08:00 AM' },
    dropoff: { date: '2025-05-05', time: '04:00 PM' },
    status: 'Confirmed',
    customer: { name: 'Bob Williams', contactNumber: '+1 555-123-4567' },
  },
  {
    id: 'BOOK004',
    vehicle: { name: 'Royal Enfield Himalayan', type: 'bike' },
    bookingDate: '2025-05-03',
    pickup: { date: '2025-05-04', time: '09:00 AM' },
    dropoff: { date: '2025-05-07', time: '03:00 PM' },
    status: 'Cancelled',
    customer: { name: 'Carol Johnson', contactNumber: '+44 7777 123456' },
  },
  {
    id: 'BOOK005',
    vehicle: { name: 'Ford Mustang', type: 'car' },
    bookingDate: '2025-05-08',
    pickup: { date: '2025-05-09', time: '01:00 PM' },
    dropoff: { date: '2025-05-12', time: '09:00 PM' },
    status: 'Confirmed',
    customer: { name: 'David Brown', contactNumber: '+61 412 345 678' },
  },
];

export const fetchBookingById = async (id: string) => {
  // const bookings = await fetchBookings();
  return fetchBookings.find((b) => b.id === id);
};
