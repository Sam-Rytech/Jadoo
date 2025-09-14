export default function CTASection() {
  return (
    <section className="max-w-5xl p-10 mx-auto space-y-6 text-center bg-orange-50 rounded-3xl">
      <h2 className="text-2xl font-bold md:text-3xl">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h2>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg md:w-2/3"
        />
        <button className="px-6 py-3 text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600">
          Subscribe
        </button>
      </div>
    </section>
  );
}
