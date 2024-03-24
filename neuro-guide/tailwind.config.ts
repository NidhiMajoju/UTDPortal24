import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '100': '200%',
    },
    extend: {
      colors: {
        custom: '#F3ECDF',
        progBar: '#79ADBB',
        buttonColor: '#eb5e28',
        quizCardColor: '#72BCC2',
        startHere: '#DAD0C3',
        neutral: '#DACCB1',
        Bluedark: '#06052C',
      },
      height: {
        'custom': '85rem', // Example custom height
        'extra-large': '30rem', // Another custom height
        // Add more custom height variations as needed
      },
      spacing: {
        'custom-bottom': '-39rem', // Example custom bottom spacing
        'custom-bottom1': '12rem',
        'custom-left': '21rem',
        'custom-mx': '46rem',
        'custom-mb': '40rem',
        'custom-mb1': '44rem',
        'custom-padding': '30rem',
        'custom-bottom2': '23.5rem',
        'custom-bottom2a': '25rem',
        'custom-bottom2b': '29rem',
        'custom-bottom2c': '30rem',
        // Add more custom bottom spacing variations as needed
      },
    },
  },
  plugins: [],
}
export default config
