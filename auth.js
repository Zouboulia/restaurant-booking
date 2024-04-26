import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import User from "@models/users";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        //getting user from the DB using the email
        const user = await User.findOne({ email: credentials.email });

        if (!user) return null;

        //compare passwords
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (passwordsMatch) return { name: user.name, email: user.email };
        else return null;
      },
    }),
  ],
});
