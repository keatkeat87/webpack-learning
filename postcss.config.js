module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-preset-env')({ stage: 1 }),
        require('postcss-font-magician')({
            display: 'swap',
            variants: {
                'Roboto Condensed': {
                    300: [],
                    400: [],
                    700: []
                }
            },
            foundries: ['google']
        })
    ]
};
