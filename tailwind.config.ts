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
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))'
				},
				foreground: 'hsl(var(--foreground))',
				samurai: {
					red: 'hsl(var(--samurai-red))',
					'red-light': 'hsl(var(--samurai-red-light))',
					'red-dark': 'hsl(var(--samurai-red-dark))',
					accent: 'hsl(var(--samurai-accent))'
				},
				paper: {
					DEFAULT: 'hsl(var(--paper))',
					border: 'hsl(var(--paper-border))',
					hover: 'hsl(var(--paper-hover))'
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))'
				}
			},
			fontFamily: {
				display: ['var(--font-display)', 'sans-serif'],
				body: ['var(--font-body)', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsla(351, 100%, 55%, 0.3)' },
					'50%': { boxShadow: '0 0 30px hsla(351, 100%, 55%, 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out'
			},
			boxShadow: {
				'shadow-red': '0 4px 20px hsla(0, 75%, 45%, 0.15)',
				'shadow-red-strong': '0 8px 30px hsla(0, 75%, 45%, 0.25)',
				'paper': '0 2px 8px hsla(0, 0%, 0%, 0.08)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
