module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"kashmir-blue": {
					DEFAULT: "#4B6D9B",
					50: "#BECCE0",
					100: "#B0C2D9",
					200: "#95ACCC",
					300: "#7997BE",
					400: "#5E81B1",
					500: "#4B6D9B",
					600: "#395275",
					700: "#26384F",
					800: "#141D2A",
					900: "#020304",
				},
			},
		},
		fontFamily: {
			raleway: ['Raleway', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif'],
		}
		
	},
	plugins: ['gatsby-plugin-postcss'],
};
