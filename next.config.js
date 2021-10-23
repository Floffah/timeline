const withPlugins = require("next-compose-plugins");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const vanillaExtractPlugin = createVanillaExtractPlugin();

const isdev = process.env.NODE_ENV === "development";

module.exports = withPlugins(
    [[vanillaExtractPlugin, { short: !isdev, debug: isdev }]],
    {
        reactStrictMode: true,
        webpack5: true,
        future: {
            modern: true,
        },
        images: {
            domains: ["twemoji.maxcdn.com"],
        },
    },
);
