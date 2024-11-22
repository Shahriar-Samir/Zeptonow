import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" }, // Use email field
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        // Example: Validate user against your predefined users
        // Replace this with your custom logic (e.g., check against a database)
        if (email === "example@gmail.com" && password === "123") {
          return {
            id: "1",
            name: "Example",
            email: "example@gmail.com", // Use email here
          }; // Return user object with email
        }

        // If login fails
        throw new Error("Invalid email or password");
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string; // Add `id` to the session's user
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Ensure `id` is added to the JWT token
        token.email = user.email; // Ensure `email` is added to the JWT token
      }
      return token;
    },
  },
  pages: {
    // Redirect paths for custom pages
    signIn: "/signin",
    error: "/error", // Error display
  },
  session: {
    strategy: "jwt", // Use JSON Web Token strategy for session handling
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
});

export { handler as GET, handler as POST };
