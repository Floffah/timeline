import Twemoji from "twemoji";

export const TwemojiURL = "https://twemoji.maxcdn.com/v/latest";

export interface EmojiType {
    raw: string; // the raw emoji type
    codepoint: string;
    url: (type: "svg" | "72x72") => string;
}

export const parseEmoji = (emoji: string): EmojiType => {
    const codepoint = Twemoji.convert.toCodePoint(emoji);
    return {
        raw: emoji,
        codepoint,
        url: (type) =>
            `${TwemojiURL}/${type}/${codepoint}.${
                type === "svg" ? "svg" : "png"
            }`,
    };
};
