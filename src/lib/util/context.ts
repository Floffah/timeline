import { createContext, useContext } from "react";
import { testTimeline } from "src/lib/timelines/builtin/test";

export const TimelineContext = createContext(testTimeline);

export function useTimeline() {
    return useContext(TimelineContext);
}
