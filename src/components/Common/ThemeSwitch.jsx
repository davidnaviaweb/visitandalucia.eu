import { useState, useEffect } from 'react';

const ThemeSwitch = () => {
    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex items-center justify-center">
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        className="sr-only"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                    />
                    <div className="block h-8 bg-gray-400 rounded-full dark:bg-gray-600 w-14"></div>
                    <div className={`dot absolute left-1 top-1 bg-white dark:bg-gray-900 w-6 h-6 rounded-full transition-transform duration-300 ${darkMode ? 'transform translate-x-full' : ''}`}></div>
                </div>
            </label>
        </div>
    );
};

export default ThemeSwitch;