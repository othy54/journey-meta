/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			epilogue: ["Epilogue", "sans-serif"],
			clashdisplay: ["ClashDisplay-Variable", "sans-serif"],
		},

		extend: {

		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".text-basic": {
					fontSize: "14px",
					fontFamily: "'ClashDisplay-Variable', sans-serif",
					lineHeight: '17px',
					color: 'white',
				}
			})
		}
	],
}
