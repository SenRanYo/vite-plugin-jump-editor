/*
 * @Author: Li Ming Yang
 * @Date: 2022-04-28 20:10:19
 * @Description: prettier格式化配置
 * @LastEditors: Li Ming Yang
 */

// 具体配置可以参考 https://prettier.io/docs/en/options.html

module.exports = {
	printWidth: 120, // 执行换行的长度
	tabWidth: 2, // 指定每个缩进的空格数
	useTabs: true, // 缩进是否使用tab
	semi: true, // 在每个语句的末尾添加一个分号
	singleQuote: false, // 使用单引号而不是双引号
	trailingComma: "all", // 未尾分号
	quoteProps: "as-needed", // 对象的 key 仅在必要时用引号
	bracketSpacing: true, // 大括号内的首尾需要空格
	jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
	jsxSingleQuote: true, // jsx 不使用单引号，而使用双引号
	arrowParens: "always", // 箭头函数，只有一个参数的时候，也需要括号
	insertPragma: false, // 不需要自动在文件开头插入 @prettier
	requirePragma: false, // 不需要写文件开头的 @prettier
	proseWrap: "preserve", // 使用默认的折行标准
	htmlWhitespaceSensitivity: "css", // 根据显示样式决定 html 要不要折行
	endOfLine: "auto", // 换行符使用 auto
	vueIndentScriptAndStyle: false, // vue 文件中的 script 和 style 内不用缩进
};
