import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Garden/Nature theme colors
				sage: {
					50: '#f6f7f6',
					100: '#e3e7e3',
					200: '#c7d0c7',
					300: '#a3b3a3',
					400: '#7d917d',
					500: '#5f735f',
					600: '#4C5C4C',
					700: '#3d4a3d',
					800: '#333a33',
					900: '#2b302b'
				},
				moss: {
					50: '#f4f6f4',
					100: '#e6eae6',
					200: '#cfd6cf',
					300: '#adb8ad',
					400: '#849484',
					500: '#677767',
					600: '#526152',
					700: '#424e42',
					800: '#374037',
					900: '#2f362f'
				},
				forest: {
					50: '#f1f4f1',
					100: '#dfe5df',
					200: '#c1ccc1',
					300: '#98a898',
					400: '#6d826d',
					500: '#516651',
					600: '#405140',
					700: '#344134',
					800: '#2b352b',
					900: '#252b25'
				},
				// Keep legacy colors for compatibility
				stone: {
					gray: '#4C5C4C',
					dark: '#2b302b',
					light: '#f6f7f6'
				},
				bronze: '#8b7355',
				memorial: '#405140'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'nature-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(76, 92, 76, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(76, 92, 76, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'nature-glow': 'nature-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
