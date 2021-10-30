import { Timeline } from "src/lib/timelines/types";

export function ViewerStatus(p: {timeline: Timeline}) {
  return (
    <div className="absolute bottom-0 w-full h-5 bg-gray-800 text-sm">
      <p className="ml-2">{p.timeline.name}</p>
    </div>
  )
}
