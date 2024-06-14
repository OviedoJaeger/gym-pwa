import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                dark: {
                    'primary': '#262626',
                    'secondary': '#1D1D1D',
                    'text': '#f5f5f5',
                    'primary-accent': '#bb86fc',
                    'secondary-accent': '#03dac6',
                },
            },
            fontFamily: {
                //sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                sans: ['Tahoma', 'Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
    
};
