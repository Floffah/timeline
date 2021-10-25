export const extendClass = (p: any, ...classes: string[]) =>
    "className" in p && typeof p.className !== "undefined"
        ? p.className + " " + classes.join(" ")
        : classes.join(" ");
