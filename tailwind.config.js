/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			animation:{
				glob: "glob infinite linear 6s"
			},
			keyframes:{
				glob:{
					"0%":{ transform: "translate(0px,0px) scale(1)"},
					"25%":{ transform: "translate(0px,20px) scale(1.1)"},
					"50%":{ transform: "translate(20px,40px) scale(1.3)"},
					"75%":{ transform: "translate(30px,20px) scale(1.1)"},
					"100%":{ transform: "translate(0px,0px) scale(1)"},
				}
			}
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};

