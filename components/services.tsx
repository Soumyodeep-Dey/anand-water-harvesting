import { Droplet, Filter, Settings } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Droplet,
      title: "Rainwater Harvesting",
      description:
        "Complete rainwater collection and storage systems designed for industrial facilities, commercial buildings, and residential apartments.",
    },
    {
      icon: Filter,
      title: "Water Purification",
      description:
        "Advanced DM (Demineralized) plant technology to ensure pure, clean water for your operations and daily use.",
    },
    {
      icon: Settings,
      title: "Installation & Maintenance",
      description:
        "Professional installation services with ongoing maintenance and support to keep your systems running optimally.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive water management solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
