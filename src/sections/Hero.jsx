import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Profile from "../assets/images/Profile1.png"
import CV from "../../public/CV.png"

export default function Hero() {
    const [displayText, setDisplayText] = useState("")
    const fullText = "Frontend Developer | React Specialist"

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1))
            index++
            if (index > fullText.length) {
                clearInterval(interval)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [])

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/CV.png";
        link.download = "CV.png";
        link.click();
    };

    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center dark:bg-slate-900 w-full min-h-screen px-4 py-12 overflow-hidden bg-white sm:px-6 lg:px-8"
        >
            {/* Decorative Elements */}
            <div className="absolute left-0 bg-yellow-200 rounded-full top-20 w-80 h-80 opacity-15 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 bg-blue-200 rounded-full w-80 h-80 opacity-15 blur-3xl -z-10"></div>

            {/* Decorative Line Top Left */}
            <div className="absolute top-0 left-0 h-1 w-96 bg-gradient-to-r from-yellow-400 via-transparent to-transparent opacity-20"></div>

            <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
                {/* Left side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center order-2 md:order-1"
                >
                    <motion.h1
                        className="text-5xl font-black leading-tight text-black dark:text-white sm:text-6xl lg:text-7xl"
                    >
                        Hi,<br />
                        I am <span className="text-blue-600">Koem Sean</span>
                    </motion.h1>

                    <p className="max-w-xl mt-6 text-base leading-relaxed dark:text-gray-400 text-gray-700 sm:text-lg">
                        Frontend Developer specializing in <span className="font-semibold text-blue-600">React</span> and modern web technologies. I craft beautiful, responsive web experiences with clean code and meticulous attention to detail.
                    </p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-10 mt-6 text-lg dark:text-white font-semibold text-gray-900"
                    >
                        {displayText}
                        <span className="ml-1 text-blue-600 animate-pulse">|</span>
                    </motion.p>

                    {/* Button Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-4 mt-12 sm:gap-6"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 hover:shadow-xl"
                        >
                            Get in touch
                            <span className="text-lg">→</span>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center dark:border-white hover:dark:bg-white hover:dark:text-black dark:text-white justify-center px-8 py-4 font-bold text-black transition-all duration-300 border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white"
                        >
                            <button onClick={handleDownload}>
                                Download CV
                            </button>
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}

                </motion.div>

                {/* Right side - Image with Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative flex items-center justify-center order-1 md:order-2"
                >
                    {/* Yellow Blob Background */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-700 rounded-3xl opacity-20 blur-3xl"
                    ></motion.div>

                    {/* Profile Image Container */}
                    <motion.div
                    // whileHover={{ y: -10 }}
                    // transition={{ type: "spring", stiffness: 300 }}
                    // className="relative"
                    >
                        <motion.img
                            // whileHover={{ scale: 1.02 }}
                            src={Profile}
                            alt="Kim Sean - Frontend Developer"
                            className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[360px] rounded-3xl mt-10"
                        />
                    </motion.div>

                    {/* Badge */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute px-5 py-4 transition-shadow bg-white border-2 border-blue-600 shadow-xl right-4 bottom-12 sm:right-8 sm:bottom-16 md:bottom-20 rounded-2xl hover:shadow-2xl"
                    >
                        {/* <p className="text-sm font-bold text-gray-900">Frontend Expert</p>
                        <p className="mt-1 text-xs font-semibold text-blue-600">3+ years experience</p> */}
                    {/* </motion.div> */}

                    {/* Floating Accent */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute w-12 h-12 bg-blue-400 rounded-full top-12 left-4 opacity-30 blur-lg"
                    ></motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
