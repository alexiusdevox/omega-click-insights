import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "@/db/schema";
import { twoFactor } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema // or "mysql", "sqlite"
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false //defaults to true
    },
    plugins: [
        twoFactor(),
        nextCookies()
    ]
});