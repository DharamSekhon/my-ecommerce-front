import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
// import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_FRONT_ID,
      clientSecret: process.env.GOOGLE_FRONT_SECRET,
    }),
  //   CredentialsProvider({
  //     name: "credentials",
  //     credentials:{
  //         email: {label: "Email", placeholder: "Enter Email"},
  //         password: {label: "Password", placeholder: "Password"},
  //     },
  //     async authorize(credentials) {
  //         if(!credentials || !credentials.email || !credentials.password) 
  //         return null;

  //         const user = users.find((item)=>item.email === credentials.email);
  //         if (user?.password === credentials.password){
  //             return user;
  //         }
  //         return null;
  //     }
  // })
  ],
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
