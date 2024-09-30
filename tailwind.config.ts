import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'], // texte
        roboto: ['Roboto', 'sans-serif'], // nav
        anton: ['Anton', 'sans-serif'], //Titre
      },
      textColor: {
        p: 'black',
        h1: 'black',
        nav: 'black',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#900C8C', // violet
        secondary: '#757575', // gris
        tertiary: '#FFFFFF', //noir
        quaternary: '#000000', //blanc
      },
      fontSize: {
        h1: '3rem',
        p: '1.5rem',
        nav: '1.8rem',
      },
    },
  },
  plugins: [],
}

export default config
