import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "../db";
import { inferAsyncReturnType, router } from "@trpc/server";
import { getSession } from "next-auth/client";

export async function createContext(ctx: CreateNextContextOptions) {
    const session = await getSession({ req: ctx.req });

    return { prisma, session };
}

export type ContextType = inferAsyncReturnType<typeof createContext>;

export const createRouter = () => router<ContextType>();
