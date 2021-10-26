import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "src/lib/api/db";
import Providers from "next-auth/providers";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session(s, u) {
            return { ...s, user: { ...s.user, id: u.id } };
        },
    },
});
