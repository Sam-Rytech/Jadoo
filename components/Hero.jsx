'use client'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="grid items-center gap-8 px-4 pt-32 pb-16 mx-auto max-w-7xl md:grid-cols-2">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase">
          Best Destinations Around The World
        </p>
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Travel, <span className="text-orange-500 underline">enjoy</span> and
          live a new and full life
        </h1>
        <p className="max-w-md text-gray-600">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening.
        </p>

        <div className="flex items-center gap-6">
          <button className="px-6 py-3 text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600">
            Find Out More
          </button>
          <button className="flex items-center gap-2 text-gray-800 hover:text-orange-500">
            <Play
              className="p-2 text-orange-500 bg-orange-100 rounded-full"
              size={36}
            />
            Play Demo
          </button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src="/hero-image.png"
        alt="Traveler"
        className="w-full max-w-md mx-auto md:max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  )
}
