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
        text: 'black',
        title: 'black',
        navigation: 'black',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#FFFFFF', // blanc
        black: '#000000', //noir
        purple: '#900C8C', //violet
        gray: '#757575', //gris
      },
      fontSize: {
        xl: '1.25rem', // 20 px pour le texte qui sera en Work Sans
        '2xl': '1.5rem', //24 px pour la nav qui sera en Roboto
        '3xl': '1.875rem', //30 px pour les titres qui seront en Anton
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.625', // un peu plus que la valeur par défaut
      },
    },
  },
  plugins: [],
}

export default config
