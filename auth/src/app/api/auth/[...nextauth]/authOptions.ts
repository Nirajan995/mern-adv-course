

import clientPromise from "@/app/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session(data: any) {
            return data.session;
        },
        async jwt({ token, user, account, profile, isNewUser }: any) {
            return token
        }
    }
}

