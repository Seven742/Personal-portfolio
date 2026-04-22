import { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"

const categories = ["all", "web", "fullstack"]

export default function Project() {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory)

    return (
        <section id="projects" className="max-w-6xl px-4 py-20 mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="mb-3 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                    Featured Projects
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400 dark:text-gray-400">
                    Explore my latest work showcasing expertise in full-stack development, responsive design, and modern web technologies.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 text-sm ${activeCategory === category
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-slate-700 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-600 dark:hover:text-blue-400"
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center"
                >
                    <p className="text-gray-400 dark:text-gray-400">No projects in this category yet.</p>
                </motion.div>
            )}
        </section>
    )
}
