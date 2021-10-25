import { AppProps } from "next/app";
import { FC } from "react";
import { DefaultSeo } from "next-seo";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "src/lib/api/trpc/router";
import "../styles/styles.css";
import { Provider } from "next-auth/client";

const App: FC<AppProps> = (p) => {
    return (
        <>
            <DefaultSeo titleTemplate="%s | Timeline" defaultTitle="Timeline" />
            <p.Component {...p.pageProps} />
        </>
    );
};

const TRPCApp = withTRPC<AppRouter>({
    config: (_c) => {
        return {
            url:
                process.env.NODE_ENV === "production"
                    ? "https://timeline.floffah.dev/api/trpc"
                    : "http://localhost:3000/api/trpc",
        };
    },
})(App);

export default function BoundariedApp(p: AppProps) {
    //TODO: error boundary

    return (
        <div className="bg-gray-700 fixed top-0 left-0 w-full h-full transition-colors">
            <Provider>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <TRPCApp {...p} />
            </Provider>
        </div>
    );
}
