import { GetStaticPaths, GetStaticProps } from "next";
import { Timeline } from "src/lib/timelines/types";
import { builtins } from "src/lib/timelines/all";
import { Button } from "src/components/input/Button";
import { useRouter } from "next/router";
import { Navbar } from "src/components/nav/Navbar";
import { Viewer } from "src/components/playback/viewer/Viewer";

export default function ViewerPage(
    p:
        | {
              timeline: Timeline;
          }
        | { notFound: string },
) {
    const router = useRouter();

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

    return <Viewer timeline={p.timeline} />;
}

export const getStaticProps: GetStaticProps<
    { timeline: Timeline } | { notFound: string },
    { name: string }
> = async (p) => {
    if (!p.params) return { notFound: true };

    let timeline: Timeline | undefined = undefined;

    const builtin = builtins.find((t) => p.params ? t.name === p.params.name : false);
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
