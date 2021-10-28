export interface Timeline {
    name: string,
    sources: TimelineSource[];
    elements: TimelineElement[];
}; // will do stuff soon

export type TimelineSource = [number, { // [id, info]
    type: "youtube",
    url: string;
    start: number;
    end: number;
    cropStart: number;
    cropEnd: number;
}];

export type TimelineElement = [number, {
    source: number;
    type: "cutIn"
}]