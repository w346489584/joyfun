module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired blue color palette
        'apple-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Apple-inspired gray color palette
        'apple-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Apple-inspired green color palette
        'apple-green': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Other Apple-specific colors
        'apple-red': '#ff3b30',
        'apple-orange': '#ff9500',
        'apple-yellow': '#ffcc00',
        'apple-purple': '#5856d6',
        'apple-pink': '#ff2d55',
        // Semantic colors
        'apple-dark': '#111827', // Same as apple-gray-900
        'apple-light': '#f9fafb', // Same as apple-gray-50
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.apple-gray.800'),
            h1: {
              color: theme('colors.apple-gray.900'),
            },
            h2: {
              color: theme('colors.apple-gray.900'),
            },
            h3: {
              color: theme('colors.apple-gray.900'),
            },
            a: {
              color: theme('colors.apple-blue.600'),
              '&:hover': {
                color: theme('colors.apple-blue.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 