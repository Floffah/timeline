module.exports = {
    reactStrictMode: true,
    webpack5: true,
    future: {
        modern: true,
    },
    images: {
        domains: ["twemoji.maxcdn.com"],
    },
    publicRuntimeConfig: {
        apiUrl:
            process.env.NODE_ENV === "production" && process.env.VERCEL_URL
                ? process.env.VERCEL_URL + "/api/trpc"
                : "http://localhost:3000/api/trpc",
        // defined here so it can be used in the trpc client outside of the server
    },
};
