import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "src/lib/api/trpc/router";
import "../styles/styles.css";

// import { Provider } from "next-auth/client";

function App(p: AppProps) {
    return (
        // <Provider>
        <div className="bg-gray-700 fixed top-0 left-0 w-full h-full transition-colors">
            <DefaultSeo titleTemplate="%s | Timeline" defaultTitle="Timeline" />
            <p.Component {...p.pageProps} />
        </div>
        // </Provider>
    );
}

export default withTRPC<AppRouter>({
    config: (_c) => {
        return {
            url:
                process.env.NODE_ENV === "production"
                    ? "https://timeline.floffah.dev/api/trpc"
                    : "http://localhost:3000/api/trpc",
        };
    },
})(App);
