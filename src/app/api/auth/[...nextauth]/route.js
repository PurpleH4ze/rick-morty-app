import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Kullanıcıyı doğrulamak için örnek bir API kullanımı
export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Örnek kullanıcı doğrulama (gerçek backend doğrulaması yapılabilir)
        if (username === "emre" && password === "admin") {
          const user = {
            id: 1,
            username,
            roles: ["ADMIN", 'SUPER-USER', 'READ'],
            accessToken: "access-token",
            refreshToken: "refresh-token",
          };
          return user;
        }

        return null; // Hatalı kullanıcı
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.roles = user.roles;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.username = token.username;
      session.user.roles = token.roles;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
