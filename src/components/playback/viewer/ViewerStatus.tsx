import { useTimeline } from "src/lib/util/context";

export function ViewerStatus() {
    const timeline = useTimeline();

    return (
        <div className="absolute bottom-0 w-full h-5 bg-gray-800 text-sm">
            <p className="ml-2">{timeline.name}</p>
        </div>
    );
}
