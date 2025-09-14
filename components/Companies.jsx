export default function Companies() {
  return (
    <section className="flex flex-wrap justify-center gap-12 px-4 py-12 mx-auto max-w-7xl">
      {['axon', 'jetstar', 'expedia', 'qantas', 'alitalia'].map((logo) => (
        <img
          key={logo}
          src={`/images/${logo}.png`}
          alt={logo}
          className="h-8 transition grayscale hover:grayscale-0"
        />
      ))}
    </section>
  )
}
