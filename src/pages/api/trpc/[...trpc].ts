import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "src/lib/api/trpc/router";
import { createContext } from "src/lib/api/trpc/context";

export default createNextApiHandler({
    router: appRouter,
    createContext,
});
