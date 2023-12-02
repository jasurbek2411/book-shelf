// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// const authOptions = {
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         if (user) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   callbacks: {
//     session: async (session, user) => {
//       session.user.id = user.id;
//       return Promise.resolve(session);
//     },
//   },
// };
