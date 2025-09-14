"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-900">Jadoo.</h1>

        <ul className="hidden gap-8 text-gray-700 md:flex">
          <li className="cursor-pointer hover:text-orange-500">Destinations</li>
          <li className="cursor-pointer hover:text-orange-500">Hotels</li>
          <li className="cursor-pointer hover:text-orange-500">Flights</li>
          <li className="cursor-pointer hover:text-orange-500">Bookings</li>
          <li className="cursor-pointer hover:text-orange-500">Login</li>
          <li>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-orange-500 hover:text-white">
              Sign up
            </button>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col p-4 space-y-4 bg-white shadow-md md:hidden">
          {["Destinations", "Hotels", "Flights", "Bookings", "Login"].map(
            (item) => (
              <p key={item} className="cursor-pointer hover:text-orange-500">
                {item}
              </p>
            )
          )}
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-orange-500 hover:text-white">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
