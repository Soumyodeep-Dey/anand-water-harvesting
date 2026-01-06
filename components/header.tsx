"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)

  return (
    <>
      <div className="bg-blue-900 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:anandharvesting@gmail.com" className="hover:text-blue-200">
                anandharvesting@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+918809659955" className="hover:text-blue-200">
                +91 88096 59955
              </a>
            </div>
          </div>
          <div className="text-xs">Nasheman House, 1st Floor, Adityapur-2, Jamshedpur - 831013</div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition">Anand Water Harvesting</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <button
                onClick={() => setShowCallPopup(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Call Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-700">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden mt-4 pt-4 border-t space-y-2">
              <a href="#about" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 py-2">
                About Us
              </a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 py-2">
                Services
              </a>
              <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 py-2">
                FAQ
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 py-2">
                Contact
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false)
                  setShowCallPopup(true)
                }}
                className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition"
              >
                Call Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Call Now Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCallPopup(false)}>
          <div className="bg-white rounded-xl p-8 max-w-sm mx-4 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us Now</h3>
            <p className="text-gray-600 mb-4">Reach out to us for any inquiries</p>
            <a
              href="tel:+918809659955"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 block mb-6"
            >
              +91 88096 59955
            </a>
            <button
              onClick={() => setShowCallPopup(false)}
              className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
