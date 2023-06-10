/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#0f111a',
                'white-text': '#fefefe',
                yellow: '#f8c847',
                'yellow-darken': '#e4b639',
                'white-darken': '#edeaea',
                green: '#8be98e',
                'green-darken': '#70cb73',
                red: '#ff5c5c',
                'red-darken': '#e74b4b',
            },
            fontFamily: {
                primary: ['Rubik', 'sans-serif'],
            },
            screens: {
                sm: '575px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
};
