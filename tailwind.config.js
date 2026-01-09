/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#333333',
        card: '#ffffff',
        'card-foreground': '#333333',
        popover: '#ffffff',
        'popover-foreground': '#333333',
        primary: '#F25C05',
        'primary-foreground': '#ffffff',
        secondary: '#F5F5F5',
        'secondary-foreground': '#333333',
        muted: '#F5F5F5',
        'muted-foreground': '#666666',
        accent: '#F25C05',
        'accent-foreground': '#ffffff',
        destructive: '#F25C05',
        'destructive-foreground': '#ffffff',
        border: '#E0E0E0',
        input: '#E0E0E0',
        ring: '#F25C05',
        'orange-primary': '#F25C05',
        'orange-dark': '#D94A04',
        'orange-light': '#FF7A33',
        'gray-light-bg': '#F5F5F5',
        'off-white': '#FAFAFA',
        'text-dark': '#333333',
        'text-gray': '#666666',
        'border-gray': '#E0E0E0',
      },
      fontFamily: {
        body: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        heading: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
