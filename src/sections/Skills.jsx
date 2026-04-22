import { useState, useEffect } from "react"

const skillsData = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 70 },
    { name: "React Js", percentage: 70 },
    { name: "JavaScript", percentage: 70 },
    { name: "Tailwind CSS", percentage: 75 },
    { name: "React Native", percentage: 35 },
]

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null)
    const [animatedPercentages, setAnimatedPercentages] = useState({})

    useEffect(() => {
        const timers = skillsData.map((skill, index) => {
            return setTimeout(() => {
                setAnimatedPercentages(prev => ({
                    ...prev,
                    [skill.name]: skill.percentage
                }))
            }, index * 100)
        })

        return () => timers.forEach(timer => clearTimeout(timer))
    }, [])

    return (
        <section id="skills" className="py-10 bg-gradient-to-b ">
            <div className="max-w-6xl px-4 mx-auto">
                <h2 className="mb-2 text-4xl font-bold text-blue-600 animate-fade-in">Skills</h2>
                <p className="mb-5 text-slate-400 animate-fade-in animation-delay-100">Proficiency levels in key technologies</p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {skillsData.map((skill, index) => (
                        <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="group animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-lg font-semibold transition-all duration-300 ${hoveredSkill === index ? 'text-blue-700 translate-x-1' : 'text-blue-600'}`}>
                                    {skill.name}
                                </span>
                                <span className={`text-sm font-bold transition-all duration-300 ${hoveredSkill === index ? 'text-blue-700 text-base scale-110' : 'text-blue-700'}`}>
                                    {animatedPercentages[skill.name] || 0}%
                                </span>
                            </div>
                            <div className="w-full h-3 overflow-hidden rounded-full shadow-md bg-slate-700">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out ${hoveredSkill === index
                                        ? 'bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-500/50'
                                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                                        }`}
                                    style={{ width: `${animatedPercentages[skill.name] || 0}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animation-delay-100 {
                    animation-delay: 100ms;
                }
            `}</style>
        </section>
    )
}
