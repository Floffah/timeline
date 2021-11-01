import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import { Timeline } from "src/lib/timelines/types";
import { Button } from "src/components/input/Button";

export const TimelineList: FC<{ timelines: Timeline[] }> = (p) => {
    return (
        <div className="h-24 overflow-y-hidden overflow-x-auto">
            {p.timelines.map((t, i) => (
                <TimelinePart timeline={t} key={i} />
            ))}
        </div>
    );
};

export const TimelinePart: FC<{ timeline: Timeline }> = (p) => {
    const router = useRouter();
    const [isSelected, setIsSelected] = useState(false);
    const listref = useRef<HTMLDivElement>(null);

    const listrefbox = listref.current?.getBoundingClientRect();

    return (
        <>
            <div
                className="bg-gray-800 rounded-lg h-24 w-40 overflow-hidden select-none cursor-pointer"
                onClick={() => setIsSelected(true)}
                ref={listref}
            >
                <h1 className="text-center w-full mt-9 h-fit">
                    {p.timeline.name}
                </h1>
            </div>
            {isSelected ? (
                <>
                    <div
                        className="bg-opacity-40 bg-gray-800 fixed w-full h-full top-0 left-0 transition-all"
                        onClick={() => setIsSelected(false)}
                    />
                    <div className="fixed top-1/2 left-1/2 translate-center bg-gray-800 rounded-lg w-80 h-fit px-4 py-3 transition-all ease-linear duration-200 overflow-hidden">
                        <div className="opacity-100 transition-all ease-linear duration-300">
                            <h1 className="text-2xl">{p.timeline.name}</h1>
                            <p className="text-gray-400">{p.timeline.description}</p>
                            <p className="text-gray-400 text-sm mt-3">Author: {p.timeline.meta.author}</p>
                            <Button.Primary className="mt-2 w-full" onClick={() => router.push("/viewer/load/[name]", `/viewer/load/${p.timeline.name}`)}>
                                Load {p.timeline.name}
                            </Button.Primary>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-opacity-0 bg-gray-800 transition-all" />
                    <div className="bg-gray-800" style={listrefbox ? {
                        top:listrefbox.top,
                        left: listrefbox.left,
                        height: listrefbox.height,
                        width:listrefbox.width
                    } : {}}>
                        <div className="opacity-0"/>
                    </div>
                </>
            )}
        </>
    );
};
