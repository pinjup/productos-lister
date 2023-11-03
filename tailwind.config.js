/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'cerulean-blue': {
                    '50': '#eff5ff',
                    '100': '#dae7ff',
                    '200': '#bdd6ff',
                    '300': '#90bcff',
                    '400': '#5c98fe',
                    '500': '#3671fb',
                    '600': '#194bf0',
                    '700': '#183cdd',
                    '800': '#1a32b3',
                    '900': '#1b308d',
                    '950': '#151f56',
                },
                
            }
        },
        
    },
    plugins: [],
};
