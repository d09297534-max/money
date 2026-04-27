import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ink palette — deeper than typical "dark mode"
        ink: {
          950: '#040405',
          900: '#070709',
          800: '#0b0b0e',
          700: '#101015',
          600: '#16161c',
          500: '#1d1d24',
          400: '#26262e',
          300: '#34343e',
        },
        // Antique gold — not "yellow", not bright
        gold: {
          50:  '#faf3df',
          100: '#f1dca5',
          200: '#e6c98a',
          300: '#d5b46a',  // primary gold
          400: '#bc9b54',
          500: '#a08240',
          600: '#7e672f',
        },
        ivory: {
          DEFAULT: '#f7f6f3',
          50:  '#faf9f6',
          100: '#f1efea',
          200: '#e3e0d6',
        },
        muted: {
          DEFAULT: '#a2a1aa',
          strong: '#73737d',
          faint:  '#4a4a52',
        },
        signal: {
          up:   '#17c37b',
          down: '#f35c5c',
          warn: '#e8b14a',
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong:  'rgba(255,255,255,0.10)',
          gold:    'rgba(213,180,106,0.18)',
        },
      },
      fontFamily: {
        // Editorial serif for display — gives the "private bank" feel
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Crisp grotesque for UI body
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        // Mono for ledgers, balances, FX
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Tightened scale; everything else inherits Tailwind defaults
        'micro':  ['10px', { lineHeight: '1.2', letterSpacing: '0.18em' }],
        'eyebrow':['11px', { lineHeight: '1.2', letterSpacing: '0.22em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.035em',
        editorial:'-0.025em',
      },
      boxShadow: {
        'soft':    '0 14px 34px rgba(0,0,0,0.28)',
        'panel':   '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
        'card':    '0 28px 60px rgba(0,0,0,0.52)',
        'gold':    '0 10px 24px rgba(213,180,106,0.18)',
        'gold-sm': '0 4px 14px rgba(213,180,106,0.12)',
      },
      backgroundImage: {
        'gold-line':  'linear-gradient(90deg, transparent, rgba(213,180,106,0.4), transparent)',
        'panel':      'linear-gradient(180deg, rgba(14,14,18,0.96), rgba(10,10,14,0.99))',
        'card-noir':  'radial-gradient(circle at 82% 16%, rgba(213,180,106,0.13), transparent 26%), linear-gradient(135deg, #242424 0%, #0b0b0d 34%, #15151a 100%)',
        'card-gold':  'radial-gradient(circle at 78% 20%, rgba(241,220,165,0.35), transparent 30%), linear-gradient(135deg, #3a3024 0%, #1a140d 50%, #0c0907 100%)',
        'grain':      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        'shimmer':     'shimmer 7s linear infinite',
        'ticker':      'ticker 60s linear infinite',
        'pulse-dot':   'pulseDot 2s ease-in-out infinite',
        'fade-up':     'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':     'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { transform: 'translateX(-125%)' },
          '100%': { transform: 'translateX(125%)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 8px currentColor' },
          '50%':      { opacity: '0.5', boxShadow: '0 0 2px currentColor' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
