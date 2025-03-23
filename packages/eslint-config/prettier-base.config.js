/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
    printWidth: 80,
    semi: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ["cn", "cva", "cx"],
};
