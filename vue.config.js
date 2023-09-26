const { defineConfig } = require("@vue/cli-service");

/**
 * Vue config file
 */

module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				implementation: require("node-sass"),
				additionalData: `@import "@/styles/index.scss";`,
			},
		},
	},
});