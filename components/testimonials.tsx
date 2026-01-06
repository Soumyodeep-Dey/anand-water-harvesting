export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center text-balance">What Our Clients Say</h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-gray-600 mb-6 italic">
              "We loved the systematic approach Anand Water Harvesting used, to ensure that not a drop of rainwater
              falling at our processing unit went to waste."
            </p>
            <div>
              <p className="font-bold text-gray-900">Binoy Minz</p>
              <p className="text-gray-600">Social Entrepreneur, My Dream Life Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
