"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <h3 className="text-sm text-gray-500 uppercase">Testimonials</h3>
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        What People Say About Us.
      </h2>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="max-w-lg p-6 bg-white shadow-lg rounded-2xl"
      >
        <p className="mb-4 text-gray-700">
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <div className="flex items-center gap-3">
          <img
            src="/images/user-1.jpg"
            alt="Mike Taylor"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">Mike Taylor</p>
            <p className="text-sm text-gray-500">Lahore, Pakistan</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
