/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'light-bg': 'var(--light-bg)',
				'light-text': 'var(--light-text)',
				'light-accent': 'var(--light-accent)',
				'light-secondary': 'var(--light-secondary)',
				'light-hover': 'var(--light-hover)',
				'dark-bg': 'var(--dark-bg)',
				'dark-text': 'var(--dark-text)',
				'dark-accent': 'var(--dark-accent)',
				'dark-secondary': 'var(--dark-secondary)',
				'dark-hover': 'var(--dark-hover)',
			},
		},
	},
	plugins: [],

}
