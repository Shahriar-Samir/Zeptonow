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
        if (email === "shabusiness035@gmail.com" && password === "123") {
          return {
            id: "1",
            name: "Admin User",
            email: "shabusiness035@gmail.com", // Use email here
          }; // Return user object with email
        }

        // If login fails
        throw new Error("Invalid email or password");
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Customize session data if needed
      session.user.id = token.id; // Ensure user.id is available in session
      return session;
    },
    async jwt({ token, user }) {
      // Include user info in the JWT token if available
      if (user) {
        token.id = user.id;
        token.email = user.email; // Add email to JWT token for future use
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
