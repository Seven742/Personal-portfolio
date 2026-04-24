import { motion } from "framer-motion"
import Icon1 from "../assets/icons/icon1.png"
import Icon2 from "../assets/icons/icon2.png"
import Icon3 from "../assets/icons/icon3.png"
import Icon4 from "../assets/icons/icon4.png"


export default function About() {
    const skills = [
        { icon: Icon1, name: "React", desc: "Building interactive UIs" },
        { icon: Icon2, name: "Tailwind CSS", desc: "Modern styling" },
        { icon: Icon4, name: "Responsive Design", desc: "Mobile-first approach" },
        { icon: Icon3, name: "JavaScript", desc: "ES6+ & beyond" },
    ]
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl px-4 py-20 mx-auto sm:px-6 lg:px-8"
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center md:text-left"
            >
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    About <span className="text-blue-600">Me</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="h-1 mt-4 bg-blue-600 md:max-w-20"
                ></motion.div>
            </motion.div>

            {/* Main Content */}
            <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                {/* Left - Description */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-6 text-lg leading-relaxed text-gray-400">
                        I'm a passionate <span className="font-semibold text-blue-600">Frontend Developer</span> dedicated to creating stunning, user-centric web experiences. With expertise in modern JavaScript frameworks and design principles, I transform ideas into elegant, functional digital solutions.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed text-gray-400">
                        My journey in web development is driven by curiosity and a love for clean code. I believe in continuous learning and staying updated with the latest technologies to deliver the best results.
                    </p>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-8 py-3 font-bold text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* Right - Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-2 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -1, boxShadow: "0 5px 6px " }}
                            className="p-6 transition bg-gray-800 border border-gray-700 rounded-lg hover:border-blue-500"
                        >
                            <div className="mb-3 text-xl">
                                <img src={skill.icon} alt="" className="w-[75px] h-[70px]" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
