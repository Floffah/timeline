import { PropsWithChildren, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { topHeightAtom } from "src/lib/state/layout";

let lastDrag = Date.now();
export function MainLayout(p: PropsWithChildren<{ top: JSX.Element }>) {
    const [topHeight, setTopHeight] = useAtom(topHeightAtom);
    const resizerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && topHeight === 0)
            setTopHeight(window.innerHeight / 2);
    });

    return (
        <>
            <div
                className="w-full fixed top-0 bg-gray-800"
                style={{
                    height: topHeight,
                }}
            >
                {p.top}
            </div>
            <div
                className="w-full fixed left-0 h-3 cursor-resize-ns z-50"
                style={{ top: topHeight - 2.5 }}
                ref={resizerRef}
                draggable={true}
                onDrag={(e) => {
                    if (
                        lastDrag + 20 < Date.now() &&
                        e.pageY > 200 &&
                        e.pageY < window.innerHeight - 100
                    ) {
                        lastDrag = Date.now();
                        setTopHeight(e.pageY);
                    }
                }}
            />
            <div
                className="w-full fixed bottom-0"
                style={{
                    height:
                        typeof window === "undefined"
                            ? 0
                            : window.innerHeight - topHeight,
                }}
            >
                {p.children}
            </div>
        </>
    );
}
