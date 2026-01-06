"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
            <div className="text-2xl font-bold text-blue-900">AWH</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <a
                href="tel:+918809659955"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-700">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden mt-4 pt-4 border-t space-y-2">
              <Link href="#" className="block text-gray-700 hover:text-blue-600 py-2">
                About Us
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-blue-600 py-2">
                Services
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-blue-600 py-2">
                FAQ
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-blue-600 py-2">
                Contact
              </Link>
              <a
                href="tel:+918809659955"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition"
              >
                Call Now
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
