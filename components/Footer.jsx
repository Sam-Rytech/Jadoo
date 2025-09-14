export default function Footer() {
  return (
    <footer className="py-12 mt-20 bg-white border-t border-gray-200">
      <div className="grid gap-10 px-4 mx-auto max-w-7xl md:grid-cols-4">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Jadoo.</h2>
          <p className="text-sm text-gray-600">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Contact</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Discover</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-sm text-center text-gray-500">
        All rights reserved © Jadoo.co
      </p>
    </footer>
  );
}
