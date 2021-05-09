const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'media',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontWeight: ['hover', 'focus'],
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
