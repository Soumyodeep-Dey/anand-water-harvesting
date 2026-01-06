"use client"

import { useState } from "react"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: "TATA Steel Facility",
      category: "Industrial",
      description: "Large-scale rainwater harvesting system for one of India's largest steel manufacturers",
    },
    {
      title: "JUSCO Jamshedpur",
      category: "Commercial",
      description: "Complete water management solution for major commercial establishment",
    },
    {
      title: "Bhalotia Engineering Works",
      category: "Industrial",
      description: "Advanced DM plant and rainwater harvesting for precision engineering facility",
    },
    {
      title: "Eastern India Cement Plant",
      category: "Industrial",
      description: "Comprehensive water conservation system for cement manufacturing",
    },
    {
      title: "Residential Complexes",
      category: "Residential",
      description: "Multiple apartment complexes across Ranchi, Dhanbad, Bokaro & Jamshedpur",
    },
    {
      title: "Timken Manufacturing",
      category: "Industrial",
      description: "Bearing manufacturing facility with integrated water purification",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Successful Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading industrial and commercial clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(idx)}
              className={`p-6 rounded-lg cursor-pointer transition border-2 ${
                selectedProject === idx
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
              </div>
              <span className="inline-block text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
                {project.category}
              </span>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
