export function Clients() {
  const clients = [
    "TATA STEEL, Jamshedpur",
    "JUSCO, Jamshedpur",
    "BHALOTIA ENG. WORKS",
    "Jai Bhawani Enterprises",
    "Shiva Inorganic",
    "Timken, Jamshedpur",
    "Eastern India Cement Plant, Bokaro",
    "J.H. Tarapore, Jamshedpur",
    "IBMD Tata Steel Processing",
    "Multiple Residential Complexes",
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center text-balance">Our Clients</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition"
            >
              <p className="text-gray-700 font-medium">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
