import { useRouter } from "next/router";
import { FC } from "react";
import { Timeline } from "src/lib/timelines/types";

export const TimelineList: FC<{ timelines: Timeline[] }> = (p) => {
    const router = useRouter();

    return (
        <div className="h-40">
            {p.timelines.map((t, i) => (
                <div
                    key={i}
                    className="bg-gray-800 rounded-lg h-24 w-40 overflow-hidden select-none cursor-pointer"
                    onClick={() => router.push(`/viewer/load/${t.name}`)}
                >
                    <h1 className="text-center w-full mt-9 h-fit">{t.name}</h1>
                </div>
            ))}
        </div>
    );
};
