/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF5FF',
          100: '#DBE8FF',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
        canvas: {
          DEFAULT: '#F6F7F9',
          2: '#EEF0F4',
          3: '#F8FAFC',
        },
        surface: '#FFFFFF',
        ink: {
          700: '#1E293B',
          800: '#101828',
          900: '#0B1220',
        },
        line: {
          DEFAULT: '#E4E7EE',
          strong: '#D5DAE3',
          soft: '#EEF1F6',
        },
        success: {
          50: '#ECFDF5',
          600: '#059669',
        },
      },
      fontFamily: {
        display: ['"Sora Variable"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display': [
          'clamp(2rem, 4.5vw, 3.25rem)',
          { lineHeight: '1.06', letterSpacing: '-0.02em' },
        ],
        'hero': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        'section': [
          'clamp(1.5rem, 2.25vw, 2rem)',
          { lineHeight: '1.15', letterSpacing: '-0.015em' },
        ],
        'card-title': [
          'clamp(1.0625rem, 1.25vw, 1.25rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],
        'eyebrow': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
        'lead': ['0.9375rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: '0 1px 2px rgb(15 23 42 / 0.04)',
        // Hero — large soft
        'hero': '0 30px 80px -24px rgb(15 23 42 / 0.18), 0 12px 32px -16px rgb(37 99 235 / 0.12)',
        // Projects — medium
        'project': '0 8px 24px -8px rgb(15 23 42 / 0.10), 0 2px 6px rgb(15 23 42 / 0.04)',
        'project-hover': '0 16px 40px -12px rgb(15 23 42 / 0.16), 0 4px 10px rgb(15 23 42 / 0.06)',
        // Certificates — light
        'cert': '0 1px 0 rgb(15 23 42 / 0.03), 0 4px 14px -6px rgb(15 23 42 / 0.08)',
        'cert-hover': '0 8px 24px -10px rgb(15 23 42 / 0.12)',
        // Skills — very subtle
        'skill': '0 1px 1px rgb(15 23 42 / 0.03)',
        'skill-hover': '0 4px 14px -6px rgb(15 23 42 / 0.08)',
        // Contact — medium
        'contact': '0 10px 30px -12px rgb(15 23 42 / 0.10), 0 2px 6px rgb(15 23 42 / 0.04)',
        // Card (default)
        'card': '0 1px 2px rgb(15 23 42 / 0.03), 0 6px 20px -8px rgb(15 23 42 / 0.08)',
        'card-hover':
          '0 2px 4px rgb(15 23 42 / 0.04), 0 12px 28px -10px rgb(15 23 42 / 0.12)',
        'panel': '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.10)',
        'modal': '0 24px 64px -16px rgb(15 23 42 / 0.28)',
      },
      maxWidth: {
        content: '1200px',
        prose: '42rem',
        paragraph: '640px',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'rise': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out',
        'rise': 'rise 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};