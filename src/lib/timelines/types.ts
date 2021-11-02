import { z } from "zod";

export const TimelineSourceObject = z.tuple(
    [
        z.number({ description: "The source ID" }),
        z.object({
            type: z.literal("youtube", {
                description: "The source type/location",
            }),
            url: z.string({
                description:
                    "The url of the video. If type is youtube, this should be the watch id not the full url",
            }),
            start: z.number({
                description:
                    "Where the video starts in the timeline (in milliseconds)",
            }),
            end: z.number({
                description:
                    "Where the video ends in the timeline (in milliseconds)",
            }),
            cropStart: z.number({
                description:
                    "How many milliseconds into the clip it should actually start. if cropStart is 1000 and start is 1500, the video will start 1.5 seconds from the start of the timeline but from 1s into the physical video",
            }),
            cropEnd: z.number({
                description:
                    "Same as cropStart, but applies to the end instead",
            }),
        }),
    ],
    { description: "An object that represents a video source in the timeline" },
);

export const TimelineElementObject = z.tuple(
    [
        z.number({ description: "The element id" }),
        z.object({
            source: z.number({ description: "The id of a source object" }),
            type: z.literal("cutIn", {
                description: "The type of element/event",
            }),
        }),
    ],
    {
        description:
            "An object that represents an element/event in the timeline, e.g, where a timeline source cuts in while another is playing",
    },
);

export const TimelineObject = z.object(
    {
        name: z.string({ description: "The timeline name" }),
        description: z.string({ description: "The timeline description" }),
        meta: z.object(
            {
                author: z.string({ description: "The timeline author" }),
            },
            { description: "Timeline meta" },
        ),
        sources: z.array(TimelineSourceObject, {
            description: "Sources the timeline uses",
        }),
        elements: z.array(TimelineElementObject, {
            description: "Elements/events in the timeline",
        }),
    },
    { description: "Object that represents a timeline" },
);

export type Timeline = z.infer<typeof TimelineObject>;
export type TimelineSource = z.infer<typeof TimelineSourceObject>;
export type TimelineElement = z.infer<typeof TimelineElementObject>;
