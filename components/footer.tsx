import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Anand Water Harvesting</h4>
            <p className="text-blue-100">
              Complete rainwater harvesting and water purification solutions for industrial and residential clients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+918809659955" className="hover:text-white transition">
                  +91 88096 59955
                </a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:anandharvesting@gmail.com" className="hover:text-white transition">
                  anandharvesting@gmail.com
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Jamshedpur, Jharkhand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-100 text-sm">
            <p>&copy; 2026 Anand Water Harvesting. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
