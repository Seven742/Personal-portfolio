import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const navItems = ["home", "about", "projects", "contact"]
    const [scrolled, setScrolled] = useState(false);


    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.3 }
        })
    }

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            // className="fixed top-0 z-50 w-full text-gray-900 bg-white   dark:bg-slate-900 dark:text-white backdrop-blur-sm bg-opacity-95"
            className={`fixed top-0 left-0 w-full dark:bg-slate-900 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md dark:shadow-md bg-white" : ""
                }`}
        >
            <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2"
                >
                    {/* <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
                        <span className="text-lg font-bold text-white">KS</span>
                    </div> */}
                    <a href="/">
                        <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                            Koem Sean
                        </h1>
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden gap-8 md:flex">
                    {navItems.map((item, i) => (
                        <motion.li
                            key={item}
                            custom={i}
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <a
                                href={`#${item}`}
                                className="relative text-sm font-semibold text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                            >
                                {item.toUpperCase()}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Right Side - Theme Toggle & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="relative flex flex-col items-center justify-center w-10 h-10 gap-1.5 md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <motion.span
                            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                        ></motion.span>
                        <motion.span
                            animate={open ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                        ></motion.span>
                        <motion.span
                            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                        ></motion.span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        className="overflow-hidden bg-white border-t border-gray-200 dark:bg-slate-800 dark:border-slate-700 md:hidden"
                    >
                        <div className="px-4 py-4 space-y-3 sm:px-6">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    className="block px-4 py-3 text-sm font-semibold text-gray-700 transition-colors duration-300 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                                    onClick={() => setOpen(false)}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {item.toUpperCase()}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
