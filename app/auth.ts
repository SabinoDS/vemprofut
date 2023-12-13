import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/app/prismadb";
import bcrypt from "bcrypt";

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        const userPassword = user?.password || "";
        const userPasswordCredentials = credentials?.password || "";

        const isCorrectedPassword = await bcrypt.compare(
          userPasswordCredentials,
          userPassword
        );

        if (!user || !isCorrectedPassword) {
          return null;
        }
        return { id: user?.id.toString(), name: user?.email.toString() };
      },
    }),
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID!",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET!",
    }),
  ],
};

export default auth;
