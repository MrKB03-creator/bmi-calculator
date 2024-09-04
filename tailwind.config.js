
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        Inter: ["Inter vr", "sans-serif"],
      },
      fontSize: {
        '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }]},
        colors: {
          "Blue": "#345FF6",
          "Gunmetal": "#253347",
          "DarkElectricBlue": "#5E6E85",
          "PureWhite": "#FFFFFF",
          "shadowBlue": "rgba(143, 174, 207, 25)",
          
      },
      
      backgroundImage: {
        'Gradient1': 'linear-gradient(127deg, rgba(214, 252, 254, 0) 0%, #D6E6FE 100%)',
      },
    },
  },
  plugins: [],
};