import { PropsWithChildren, useRef } from "react";
import { useAtom } from "jotai";
import { topHeightAtom } from "src/lib/state/layout";

// a component which returns a div whos height is 100% of the container but the width is 16:9 ratio to the height which is calculated using the useRef hook
export function Viewbox(p: PropsWithChildren<any>) {
    const viewboxref = useRef<HTMLDivElement>(null);
    useAtom(topHeightAtom);

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
