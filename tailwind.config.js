module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkmode: false,
    theme: {
        extend:{
            colors: {
                primary: '#7DBA84',
                secondary: '#D64933',
                accent: '#F0803C',
                background: '#2B303A',
                tertiary: '#EEE5E9',
            },
        },
    },
    variants:{},
    plugins:[],
}