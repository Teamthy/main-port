module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            spacing: {
                '7.5': '1.875rem',
                '15': '3.75rem',
                '25': '6.25rem',
                '30': '7.5rem',
                '4.5': '1.125rem',
            },
        },
    },
    plugins: [],
};
