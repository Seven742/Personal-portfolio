import React from 'react'
import { FiGithub, FiFacebook } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";


const Contact = () => {
    return (
        <footer id="contact" className="pt-10 pb-6 text-gray-300 bg-gray-900 dark:border-t dark:border-gray-700">
            <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Koem Sean</h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        Frontend Developer passionate about building clean UI, smooth UX,
                        and modern web applications.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Connect</h3>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/" target="_blank" className="hover:text-white">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://facebook.com/" target="_blank" className="hover:text-white">
                            <FiFacebook size={24} />
                        </a>
                        <a href="https://t.me/Seven1572" className="hover:text-white">
                            <PiTelegramLogoBold size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="pt-4 mt-10 text-sm text-center text-gray-400 border-t border-gray-700">
                <p className="flex items-center justify-center gap-1">
                    © {new Date().getFullYear()} Koem Sean. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Contact