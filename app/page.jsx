"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Companies from "@/components/Companies";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Steps />
      <Testimonials />
      <Companies />
      <CTASection />
      <Footer />
    </main>
  );
}
