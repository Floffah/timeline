import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "src/lib/api/trpc/router";
import { createContext } from "src/lib/api/trpc/context";

require("@prisma/client");

export default createNextApiHandler({
    router: appRouter,
    createContext,
});
