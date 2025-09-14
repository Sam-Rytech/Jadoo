'use client'
import { motion } from 'framer-motion'

const destinations = [
  {
    img: '/Dest1.jpg',
    city: 'Rome, Italy',
    price: '$5.42k',
    days: '10 Days Trip',
  },
  {
    img: '/Dest2.png',
    city: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    img: '/Dest3.png',
    city: 'Full Europe',
    price: '$15k',
    days: '28 Days Trip',
  },
]

export default function Destinations() {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <h3 className="text-sm font-medium text-center text-gray-500 uppercase">
        Top Selling
      </h3>
      <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
        Top Destinations
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden bg-white shadow-lg rounded-2xl"
          >
            <img
              src={dest.img}
              alt={dest.city}
              className="object-cover w-full h-56"
            />
            <div className="p-5 space-y-2">
              <div className="flex justify-between">
                <h4 className="font-semibold">{dest.city}</h4>
                <p className="text-gray-700">{dest.price}</p>
              </div>
              <p className="text-sm text-gray-500">{dest.days}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
