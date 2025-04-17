# Booking Dashboard

A mock booking dashboard built using Next.js, Tailwind CSS, and a local JSON mock API. This project demonstrates clean code practices, modular design, and a responsive UI that fetches and displays booking data.


## Features

- Dashboard overview with booking statistics
- Cards of bookings with filtering by status
- Detailed booking cards with customer information
- Responsive design that works on mobile, tablet, and desktop
- Clean, modular code structure

## Tech Stack

- **Next.js**: React framework for building the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: For type safety and better developer experience
- **date-fns**: For date formatting
- **Lucide React**: For icons

## Project Structure

\`\`\`
booking-dashboard/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Main page component
│   └── layout.tsx        # Root layout
│   └── booking\[id]      # Detail seperate page
├── components/           # Reusable components
│   ├── BookingCard.tsx   # Individual booking card
│   ├── Dashboard.tsx     # List of bookings with filters
│   ├── Sidebar.tsx       # Sidebar responsive component
│   ├── StatusBadge.tsx   # Show booking status
│   
├── lib/                  # Data
│   ├── api.ts            # Data in json format
│   
├── types/                # TypeScript type definitions
│   ├── apiDataType.ts    # Define booking datatypes
│   
└── public/               # Static assets
\`\`\`

## Code Approach

### Modular Design

The application is built with a modular component structure:

1. **Components**: Each component element is a separate with clear responsibilities
2. **Data Layer**: Data fetching is separated from components
3. **Types**: Strong typing with TypeScript for better code quality

### Data Flow

1. Mock booking data is stored in a JSON file
2. Data utility functions simulate API calls to fetch and process data
3. Server components fetch data and pass it to client components
4. Client components handle user interactions and filtering

### Responsive Design

- Tailwind CSS is used for responsive layouts
- Mobile-first approach with breakpoints for larger screens
- Flexible grid system for different screen sizes

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Enhancements

- Add authentication
- Implement booking creation and editing
- Add more detailed analytics
- Connect to a real backend API