import { FC, HTMLAttributes } from "react";
import { extendClass } from "src/lib/util/props";

const Button: FC<HTMLAttributes<HTMLButtonElement>> & {
    Primary: FC<HTMLAttributes<HTMLButtonElement>>;
} = (p) => {
    return (
        <button
            {...p}
            className={extendClass(
                p,
                "text-gray-200 hover:bg-gray-600 active:bg-gray-700 px-3 py-1 text-center rounded-lg drop-shadow-md transition-colors duration-200 border-gray-600 border hover:border-transparent",
            )}
        />
    );
};

Button.Primary = (p) => {
    return (
        <Button
            {...p}
            className={extendClass(
                p,
                "text-blue-100 border-blue-600 bg-blue-600 hover:bg-blue-500 active:bg-blue-600",
            )}
        />
    );
};
Button.Primary.displayName = "ButtonPrimary";

export { Button };
