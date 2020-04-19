module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "@vue/prettier",
        "airbnb",
        "prettier",
        "prettier/babel",
        "prettier/react",
        "prettier/standard",
        "prettier/vue",
        "eslint-config-prettier",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": ["error"],
    },
    plugins: ["prettier"],
};
