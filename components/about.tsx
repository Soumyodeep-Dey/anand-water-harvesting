export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">About Anand Water Harvesting</h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to <strong>Anand Water Harvesting (AWH)</strong>. We provide complete solutions for rainwater
              harvesting and water purification through advanced DM plant technology.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We have blended our customers' trust and our dedication to develop perfect services for our future
              clients. With expertise in managing water resources, we've executed numerous successful projects across
              Jharkhand and beyond.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 font-bold text-xl mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">ISO 9001:2015 Certified</h4>
                  <p className="text-gray-600">Quality management system certified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-blue-600 font-bold text-xl mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Qualified and competent professionals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <p className="text-gray-600">Water Conservation & Purification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
