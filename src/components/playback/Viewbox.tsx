import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { topHeightAtom } from "src/lib/state/layout";

export function Viewbox(p: PropsWithChildren<any>) {
    const viewboxref = useRef<HTMLDivElement>(null);
    const [rerenders, setRerenders] = useState(0);
    useAtom(topHeightAtom);

    useEffect(() => {
        if (
            viewboxref.current &&
            viewboxref.current.getBoundingClientRect().width === 0
        )
            setRerenders(rerenders + 1);
    }, [rerenders, viewboxref]);

    return (
        <div
            className="bg-gray-950 h-full relative m-auto overflow-hidden"
            ref={viewboxref}
            style={{
                width: viewboxref.current
                    ? (viewboxref.current.getBoundingClientRect().height / 9) *
                      16
                    : 0,
            }}
        >
            {p.children}
        </div>
    );
}
