import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_ID || !process.env.GOOGLE_SECRET) {
  throw new Error("Missing Google OAuth environment variables: GOOGLE_ID and GOOGLE_SECRET");
}

const handler: any = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',
        },
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({user, account, profile}: any) {
        console.log(user , account);
        
      if (
        account.provider === "google" &&
        profile.email_verified === true
      ) {
        return profile;
      } else {
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
