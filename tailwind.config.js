/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
        "!./node_modules/**",
        "!./.next/**",
    ],
    theme: {
        extend: {
            colors: {
                brand: "#68B42E",
            },
        },
    },
    plugins: [],
};
