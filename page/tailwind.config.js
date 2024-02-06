const miAzul = {
	50: "#eeefff",
	100: "#dcdeff",
	200: "#b2bbff",
	300: "#6d81ff",
	400: "#2040ff",
	500: "#0016ff",
	600: "#0006df",
	700: "#0003b4",
	800: "#000595",
	900: "#00047a",
	950: "#00000f",
};

const miGris = {
    '50': '#f6f6f9',
    '100': '#ededf1',
    '200': '#d6d6e1',
    '300': '#b3b5c6',
    '400': '#898ca7',
    '500': '#6b6e8c',
    '600': '#565873',
    '700': '#46475e',
    '800': '#3c3d50',
    '900': '#363744',
    '950': '#121217',
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				miAzul,
				miGris,
			},
			borderColor: {
				miAzul,
				miGris,
			},
			textColor: {
				miAzul,
				miGris,
			},
		},
	},
	plugins: [],
};
