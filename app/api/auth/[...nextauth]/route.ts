import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // Replace this with your custom logic for authenticating a user
        const { username, password } = credentials || {};

        // Example: Validate user against your database
        if (username === "admin" && password === "password123") {
          return { id: "1", name: "Admin User", email: "admin@example.com" }; // Example user object
        }

        // If login fails
        throw new Error("Invalid username or password");
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Customize session data if needed
      return session;
    },
    async jwt({ token, user }) {
      // Include user info in the JWT if available
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    // Redirect paths for custom pages
    signIn: "/auth/signin",
    error: "/auth/error", // Error display
  },
  session: {
    strategy: "jwt", // Use JSON Web Token strategy for session handling
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
});

export { handler as GET, handler as POST };
