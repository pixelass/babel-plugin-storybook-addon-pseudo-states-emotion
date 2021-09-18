const syntaxJsx = require("@babel/plugin-syntax-jsx").default;

const pattern = /&:(hover|active|invalid|checked|focus-within|focus-visible|focus|visited)/g;

/**
 *
 * @param {string} value
 * @param {string} prefix
 * @return {string}
 */
const createPseudoStates = (value, prefix) => {
	if (/-/.exec(value)) {
		return `&:${value},&.${prefix}${value},&.${prefix}${value.replace(/-/, "")}`;
	}
	return `&:${value},&.${prefix}${value}`;
};

/**
 *
 * @param {string} value
 * @param {string} prefix
 */
const replacePseudoStates = (value, prefix) =>
	value.replace(pattern, (match, $1) => createPseudoStates($1, prefix));

/**
 *
 * @param babel
 * @param {string} [prefix="\\:"]
 * @return {{name: string, visitor: {StringLiteral(*): void, CallExpression(*): void}, inherits: *}}
 */
const plugin = (babel, { prefix = "\\:" }) => {
	return {
		name: "storybook-addon-pseudo-states-emotion",
		inherits: syntaxJsx,
		visitor: {
			StringLiteral(path) {
				if (
					path.node.type === "StringLiteral" &&
					path.node.value &&
					pattern.exec(path.node.value)
				) {
					path.node.value = replacePseudoStates(path.node.value, prefix);
				}
			},
			CallExpression(path) {
				path.node.arguments.forEach(argument => {
					if (
						argument.type === "StringLiteral" &&
						argument.value &&
						pattern.exec(argument.value)
					) {
						argument.value = replacePseudoStates(argument.value, prefix);
					}
				});
			},
		},
	};
};

module.exports = plugin;
