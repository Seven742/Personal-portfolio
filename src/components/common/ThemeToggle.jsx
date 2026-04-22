import { useTheme } from "../../context/ThemeContext"
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-1 text-sm border border-gray-300 rounded-lg dark:border-gray-600"
        >
            {theme === "dark" ? (
                <>
                    <div className="flex items-center gap-1">
                        <CiLight size={18} />
                        <h1> Light</h1>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center gap-1">
                        <CiDark size={18} />
                        <h1>Dark</h1>
                    </div>
                </>
            )}
        </button>
    )
}
