const path = require("path");

module.exports = function override(config, env) {
	if (!config.resolve) {
		config.resolve = {};
	}
	if (!config.resolve.alias) {
		config.resolve.alias = {};
	}
	config.resolve.alias = {
		...config.resolve.alias,
		img: path.resolve(__dirname, 'src', 'assets', 'img'),
		fonts: path.resolve(__dirname, 'src', 'assets', 'fonts')
	}
	// (process.env.NODE_ENV === 'production') ?
	return config;
}
