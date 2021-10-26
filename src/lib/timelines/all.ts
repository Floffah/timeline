import { Timeline } from "src/lib/timelines/types";
import { testTimeline } from "src/lib/timelines/builtin/test";

export const timelines: Timeline[] = [
    ...(process.env.NODE_ENV ? [testTimeline] : []),
];
