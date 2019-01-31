import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['300', '400', '700'],
    }
  ],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerFontFamily: ['Open Sans', 'sans-serif']
})

export default typography;
