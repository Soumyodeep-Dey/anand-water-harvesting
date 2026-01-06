export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Anand Water Harvesting</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 text-pretty">
            Save Water, Secure Future. Complete rainwater harvesting and water purification solutions for industrial and
            residential clients.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+918809659955"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Call Now
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
