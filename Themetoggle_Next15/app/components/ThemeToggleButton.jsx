// components/ThemeToggleButton.tsx
'use client';

import { useTheme } from "../ThemeProvider";



export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
        </button>
    );
};