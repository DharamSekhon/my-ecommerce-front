import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";
import RedditProvider from "next-auth/providers/reddit";
import TwitterProvider from "next-auth/providers/twitter";




// import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_FRONT_ID,
      clientSecret: process.env.GOOGLE_FRONT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
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
