// /components/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ClipboardIcon,
  TruckIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Dashboard", icon: HomeIcon },
  { label: "Bookings", icon: ClipboardIcon },
  { label: "Vehicles", icon: TruckIcon },
  { label: "Customers", icon: UserGroupIcon },
  { label: "Settings", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Bar (Mobile only) */}
      <div className="md:hidden bg-gray-800 text-white flex justify-between items-center p-4">
        <h1 className="font-bold text-lg">Vehicle Booking</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`w-full z-40 bg-gray-800 text-white
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex`}
      >
        <div className="flex items-center justify-between w-full p-4">
          <h2 className="text-2xl font-bold hidden md:block">
            Vehicle Booking
          </h2>
          <nav className="flex items-center gap-4">
            {navItems.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                href="/"
                className="flex items-center hover:bg-gray-700 transition"
              >
                {/* <Icon className="h-5 w-5 mr-3" /> */}
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
