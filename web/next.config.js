const withTM = require("next-transpile-modules")(["react-native-web"]);

module.exports = withTM({
	webpack: (config) => {
		config.resolve.extensions = [
			".web.ts",
			".web.tsx",
			".web.js",
			".web.jsx",
			".ts",
			".tsx",
			".js",
			".jsx",
			...config.resolve.extensions,
		];

		config.resolve.alias = {
			...(config.resolve.alias || {}),
			"react-native$": "react-native-web",
			"react-native-web/src": "react-native-web/dist",
		};

		return config;
	},
});
