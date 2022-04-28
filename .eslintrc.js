/*
 * @Author: Li Ming Yang
 * @Date: 2022-04-28 20:08:29
 * @Description: eslint 配置
 * @LastEditors: Li Ming Yang
 */

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	extends: [
		"prettier",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"vue/multi-word-component-names": "off",
	},
};
