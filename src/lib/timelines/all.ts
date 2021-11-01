import { Timeline } from "src/lib/timelines/types";
import { testTimeline } from "src/lib/timelines/builtin/test";

export const builtins: Timeline[] = [
    ...(process.env.NODE_ENV ? [testTimeline] : []),
];
