import NextAuth, { NextAuthConfig, Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";


const authConfig: NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user;
        },
        async signIn({ user, account, profile }) {
            if (!user.email) {
                return false;
            }

            try {
                const existingGuest = await getGuest(user.email);

                if (!existingGuest) {
                    const newGuestData = JSON.stringify({
                        email: user.email,
                        fullName: user.name ?? '',
                    });
                    await createGuest(newGuestData);
                }

                return true;
            } catch {
                return false;
            }
        },
        async session({ session, user }) {
            const guest = await getGuest(session.user.email);
            return {
                ...session,
                user: {
                    ...session.user,
                    guestId: guest?.id,
                },
            };
        },
    },
    pages: {
        signIn: "/auth/sign-in",
    },
};

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig);