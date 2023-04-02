module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"kashmir-blue": {
					DEFAULT: '#1F58A3',  
					50: '#90B7EA',
					100: '#7FACE7',
					200: '#5C95E0',
					300: '#3A7FDA',
					400: '#266BC5',
					500: '#1F58A3',
					600: '#163F74',
					700: '#0D2545',
					800: '#040C16',
					900: '#000000'
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
