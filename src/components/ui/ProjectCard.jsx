import { motion } from "framer-motion"
import { useState } from "react"

export default function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-full overflow-hidden transition-all duration-300 border group rounded-xl bg-slate-900 border-slate-700 hover:border-blue-600"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-slate-800">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 border rounded-full bg-blue-600/10 border-blue-600/30">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-600">
                    {project.title}
                </h3>
                <p className="flex-grow mt-2 text-sm text-gray-400 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-medium text-white transition-all duration-200 border rounded bg-slate-800 border-slate-700 hover:bg-blue-600/10 hover:border-blue-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 mt-5 border-t border-slate-700">
                    {project.link && (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex-1 px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-600"
                        >
                            Live Demo
                        </motion.a>
                    )}
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex-1 px-3 py-2 text-sm font-semibold text-center text-white transition-all duration-200 border rounded-lg bg-slate-800 border-blue-600/30 hover:border-blue-600 hover:bg-blue-600/5"
                        >
                            GitHub
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
