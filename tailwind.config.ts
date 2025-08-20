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
			fontFamily: {
				display: ['var(--font-display)', 'Orbitron', 'monospace'],
				mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
				body: ['var(--font-body)', 'Inter', 'sans-serif']
			},
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
				// BLOCKMINDS Custom Colors
				'void-black': 'hsl(var(--void-black))',
				'deep-charcoal': 'hsl(var(--deep-charcoal))',
				'fracture-grey': 'hsl(var(--fracture-grey))',
				'signal-grey': 'hsl(var(--signal-grey))',
				'core-purple': 'hsl(var(--core-purple))',
				'deep-purple': 'hsl(var(--deep-purple))',
				'cyber-cyan': 'hsl(var(--cyber-cyan))',
				'pale-cyan': 'hsl(var(--pale-cyan))',
				'pure-white': 'hsl(var(--pure-white))',
				'glitch-white': 'hsl(var(--glitch-white))',
				'soft-white': 'hsl(var(--soft-white))'
			},
			backgroundImage: {
				'gradient-void': 'var(--gradient-void)',
				'gradient-purple': 'var(--gradient-purple)',
				'gradient-cyber': 'var(--gradient-cyber)',
				'gradient-fracture': 'var(--gradient-fracture)'
			},
			boxShadow: {
				'glow-purple': 'var(--glow-purple)',
				'glow-cyan': 'var(--glow-cyan)',
				'glow-soft': 'var(--glow-soft)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
