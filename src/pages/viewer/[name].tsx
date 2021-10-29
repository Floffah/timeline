import { GetStaticPaths, GetStaticProps } from "next";
import { Timeline } from "src/lib/timelines/types";
import { builtins } from "src/lib/timelines/all";
import { Button } from "src/components/input/Button";
import { useRouter } from "next/router";
import { Navbar } from "src/components/nav/Navbar";
import { MainLayout } from "src/components/layout/MainLayout";
import { useRef } from "react";
import { useAtom } from "jotai";
import { topHeightAtom } from "src/lib/state/layout";

export default function ViewerPage(
    p:
        | {
              timeline: Timeline;
          }
        | { notFound: string },
) {
    const router = useRouter();
    const viewboxref = useRef<HTMLDivElement>(null);
    useAtom(topHeightAtom);

    if ("notFound" in p) {
        return (
            <>
                <Navbar showBackground={true} />
                <div className="absolute translate-center w-fit h-fit text-center">
                    <h1 className="text-xl">
                        Whoops, Timeline &quot;{p.notFound}&quot; does not
                        exist!
                    </h1>
                    <Button.Primary
                        className="mt-2"
                        onClick={() => router.push("/browse")}
                    >
                        Browse Timelines
                    </Button.Primary>
                </div>
            </>
        );
    }

    return (
        <MainLayout
            top={
                <div
                    className="bg-gray-950 h-full relative m-auto overflow-hidden"
                    ref={viewboxref}
                    style={{
                        width: viewboxref.current
                            ? (viewboxref.current.getBoundingClientRect()
                                  .height /
                                  9) *
                              16
                            : 0,
                    }}
                >
                    <p>placeholder viewbox</p>
                </div>
            }
        >
            <p>placeholder bottom</p>
        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps<
    { timeline: Timeline } | { notFound: string },
    { name: string }
> = async (p) => {
    if (!p.params) return { notFound: true };

    let timeline: Timeline | undefined = undefined;

    const builtin = builtins.find((t) => t.name === p.params?.name);
    if (builtin) timeline = builtin;

    // more soon

    if (!timeline)
        return { props: { notFound: p.params.name }, revalidate: 30 };

    return {
        props: {
            timeline,
        },
        revalidate: 120,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: builtins.map((t) => ({ params: { name: t.name } })),
        fallback: true,
    };
};
