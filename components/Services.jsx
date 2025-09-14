"use client";
import { motion } from "framer-motion";
import { Sun, Plane, Calendar, Settings } from "lucide-react";

const services = [
  {
    icon: <Sun className="text-orange-500" size={28} />,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: <Plane className="text-orange-500" size={28} />,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: <Calendar className="text-orange-500" size={28} />,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
  },
  {
    icon: <Settings className="text-orange-500" size={28} />,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers.",
  },
];

export default function Services() {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <h3 className="text-sm font-medium text-center text-gray-500 uppercase">
        Category
      </h3>
      <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
        We Offer Best Services
      </h2>

      <div className="grid gap-8 md:grid-cols-4">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3 p-6 text-center bg-white shadow-lg rounded-2xl"
          >
            <div className="p-4 bg-orange-100 rounded-full">{service.icon}</div>
            <h4 className="text-lg font-semibold">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
