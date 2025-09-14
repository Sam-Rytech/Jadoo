'use client'
import { motion } from 'framer-motion'

const destinations = [
  {
    img: '/images/rome.jpg',
    city: 'Rome, Italy',
    price: '$5.42k',
    days: '10 Days Trip',
  },
  {
    img: '/images/london.jpg',
    city: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    img: '/images/europe.jpg',
    city: 'Full Europe',
    price: '$15k',
    days: '28 Days Trip',
  },
]

export default function Destinations() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h3 className="text-center text-sm uppercase text-gray-500 font-medium">
        Top Selling
      </h3>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Top Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={dest.img}
              alt={dest.city}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-2">
              <div className="flex justify-between">
                <h4 className="font-semibold">{dest.city}</h4>
                <p className="text-gray-700">{dest.price}</p>
              </div>
              <p className="text-gray-500 text-sm">{dest.days}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
