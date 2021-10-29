export const extendClass = (p: any, ...classes: string[]) =>
    "className" in p && typeof p.className !== "undefined"
        ? p.className + " " + classes.join(" ")
        : classes.join(" ");

export const c = (...classes: string[]) =>
    classes.join(" ").split(" ").sort().join(" ");
