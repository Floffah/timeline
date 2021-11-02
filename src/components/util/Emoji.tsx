import { forwardRef, HTMLAttributes } from "react";
import { EmojiType, parseEmoji } from "src/lib/util/emoji";
import Image from "next/image";

const Emoji = forwardRef<
    HTMLImageElement,
    HTMLAttributes<HTMLImageElement> & { emoji: string | EmojiType }
>((p, ref) => (
    <Image
        ref={ref}
        src={
            typeof p.emoji === "string"
                ? parseEmoji(p.emoji).url("svg")
                : p.emoji.url("svg")
        }
        alt="emoji"
        {...({ ...p, emoji: undefined } as any)}
    />
));
Emoji.displayName = "Emoji";

export default Emoji;
