"use client";
import { motion } from "framer-motion";
import { MapPin, CreditCard, Plane } from "lucide-react";

const steps = [
  {
    icon: <MapPin className="text-orange-500" size={28} />,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <CreditCard className="text-orange-500" size={28} />,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <Plane className="text-orange-500" size={28} />,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Steps() {
  return (
    <section className="grid gap-12 px-4 py-20 mx-auto max-w-7xl md:grid-cols-2">
      <div className="space-y-6">
        <h3 className="text-sm text-gray-500 uppercase">Easy and Fast</h3>
        <h2 className="text-3xl font-bold md:text-4xl">
          Book Your Next Trip In 3 Easy Steps
        </h2>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-orange-100 rounded-full">{step.icon}</div>
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.img
        src="/images/trip-card.png"
        alt="Trip Preview"
        className="shadow-lg rounded-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
}
