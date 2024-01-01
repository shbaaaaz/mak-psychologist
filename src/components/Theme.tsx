'use client'

import { useLayoutEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";


const Theme = () => {
    const [theme, setTheme] = useState<string>('');

    useLayoutEffect(()=> {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle('dark', storedTheme === 'dark')
        } else {
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    return <button onClick={toggleTheme} className="focus:outline-none text-3xl" aria-label="toggle theme" title={`Switch to ${theme} mode`}>
        { theme === 'light' ? <MdDarkMode aria-label="dark"/> : <IoMdSunny aria-label="light"/>}
    </button>
}

export default Theme;