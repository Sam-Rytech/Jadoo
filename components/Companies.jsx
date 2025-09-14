export default function Companies() {
  return (
    <section className="flex flex-wrap justify-center gap-12 px-4 py-12 mx-auto max-w-7xl">
      {['Axon', 'Jetstar', 'Expedia', 'Qantas', 'Alitalia'].map((logo) => (
        <img
          key={logo}
          src={`/${logo}.png`}
          alt={logo}
          className="h-8 transition grayscale hover:grayscale-0"
        />
      ))}
    </section>
  )
}
