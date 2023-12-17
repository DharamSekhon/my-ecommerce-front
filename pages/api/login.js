// // // pages/api/login.js
// // import clientPromise from '../../your/path/to/mongodb/connection/module'; // Update the path accordingly
// // import bcrypt from 'bcrypt';

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { email, password } = req.body;

// //     try {
// //       const client = await clientPromise;
// //       const db = client.db('yourDatabaseName'); // Update the database name

// //       const collection = db.collection('users');

// //       const user = await collection.findOne({ email });

// //       if (!user) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       const passwordMatch = await bcrypt.compare(password, user.password);

// //       if (!passwordMatch) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       // Your authentication successful logic goes here

// //       // Redirect user after successful login
// //       res.redirect('/afterlogin');
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       return res.status(500).json({ message: 'Internal Server Error' });
// //     }
// //   }

// //   return res.status(405).json({ message: 'Method Not Allowed' });
// // }


// //final and working
// // pages/api/login.js

// // import { connectDB } from '@/lib/db';
// // import bcrypt from 'bcrypt';

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { email, password } = req.body;

// //     try {
// //       const client = await connectDB();
// //       const db = client.db('test'); // Update to your actual database name

// //       const collection = db.collection('users');

// //       const user = await collection.findOne({ email });

// //       if (!user) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       const passwordMatch = await bcrypt.compare(password, user.password);

// //       if (!passwordMatch) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       return res.status(200).json({ message: 'Login successful' });
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       return res.status(500).json({ message: 'Internal Server Error' });
// //     }
// //   }

// //   return res.status(405).json({ message: 'Method Not Allowed' });
// // }




// // pages/api/login.js
// // import { connectDB } from '@/lib/db';
// // import bcrypt from 'bcrypt';
// // import { withIronSession } from 'next-iron-session';

// // const handler = async (req, res) => {
// //   if (req.method === 'POST') {
// //     const { email, password } = req.body;

// //     try {
// //       const client = await connectDB();
// //       const db = client.db('test'); // Update to your actual database name

// //       const collection = db.collection('users');

// //       const user = await collection.findOne({ email });

// //       if (!user) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       const passwordMatch = await bcrypt.compare(password, user.password);

// //       if (!passwordMatch) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       // Store user information in session
// //       req.session.set('user', { id: user._id, name: user.name });
// //       await req.session.save();

// //       return res.status(200).json({ message: 'Login successful' });
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       return res.status(500).json({ message: 'Internal Server Error' });
// //     }
// //   }

// //   return res.status(405).json({ message: 'Method Not Allowed' });
// // };

// // export default withIronSession(handler, {
// //   password: process.env.SESSION_SECRET,
// //   cookieName: 'session',
// //   cookieOptions: {
// //     secure: process.env.NODE_ENV === 'production' ? true : false,
// //   },
// // });



// // import NextAuth from 'next-auth';
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import { connectDB } from '@/lib/db';

// // export default NextAuth({
// //   providers: [
// //     CredentialsProvider({
// //       credentials: {
// //         username: { label: 'Email', type: 'email' },
// //         password: { label: 'Password', type: 'password' },
// //       },
// //       authorize: async (credentials) => {
// //         try {
// //           const client = await connectDB();
// //           if (!client) {
// //             throw new Error('Database connection failed');
// //           }

// //           const db = client.db('test'); // Update to your actual database name
// //           const collection = db.collection('users');

// //           const user = await collection.findOne({ email: credentials.username });

// //           if (!user || !(await verifyPassword(credentials.password, user.password))) {
// //             return Promise.resolve(null);
// //           }

// //           // If credentials are valid, return the user object
// //           return Promise.resolve({ id: user._id, name: user.name });
// //         } catch (error) {
// //           console.error('Error during login:', error);
// //           return Promise.resolve(null);
// //         }
// //       },
// //     }),
// //   ],
// // });

// // // Function to verify password using bcrypt
// // async function verifyPassword(password, hashedPassword) {
// //   return await bcrypt.compare(password, hashedPassword);
// // }

// // import { connectDB } from '../../lib/db';
// // import bcrypt from 'bcrypt';
// // import { withIronSession } from 'next-iron-session';

// // const handler = async (req, res) => {
// //   if (req.method === 'POST') {
// //     const { email, password } = req.body;

// //     try {
// //       const client = await connectDB();
// //       const db = client.db('test'); // Update to your actual database name

// //       const collection = db.collection('users');

// //       const user = await collection.findOne({ email });

// //       if (!user) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       const passwordMatch = await bcrypt.compare(password, user.password);

// //       if (!passwordMatch) {
// //         return res.status(401).json({ message: 'Invalid email or password' });
// //       }

// //       // Store user information in session
// //       req.session.set('user', { id: user._id, name: user.name });
// //       await req.session.save();

// //       return res.status(200).json({ message: 'Login successful' });
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       return res.status(500).json({ message: 'Internal Server Error' });
// //     }
// //   }

// //   return res.status(405).json({ message: 'Method Not Allowed' });
// // };

// // export default withIronSession(handler, {
// //   password: process.env.SESSION_SECRET,
// //   cookieName: 'session',
// //   cookieOptions: {
// //     secure: process.env.NODE_ENV === 'production' ? true : false,
// //   },
// // });



// // api/login.js

// // api/login.js

// import { connectDB } from '../../lib/db';
// import bcrypt from 'bcrypt';
// import { withIronSession } from 'next-iron-session';

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       const client = await connectDB();
//       const db = client.db('test'); // Update to your actual database name

//       const collection = db.collection('users');

//       const user = await collection.findOne({ email });

//       if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }

//       // Store user information in session, including the user's name
//       req.session.set('user', { id: user._id, email: user.email });
//       await req.session.save();

//       // Redirect to the afterlogin page on the client side
//       return res.json({ message: 'Login successful', redirectTo: '/afterlogin', email: user.email });
//     } catch (error) {
//       console.error('Error during login:', error);
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }

//   return res.status(405).json({ message: 'Method Not Allowed' });
// };

// export default withIronSession(handler, {
//   password: process.env.SESSION_SECRET,
//   cookieName: 'session',
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production' ? true : false,
//   },
// });




// pages/api/login.js
import { connectDB } from '@/lib/db';
import bcrypt from 'bcrypt';
import { withIronSession } from 'next-iron-session';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const client = await connectDB();
      const db = client.db('test'); // Update to your actual database name

      const collection = db.collection('users');

      const user = await collection.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Store user information in session
      req.session.set('user', { id: user._id, email: user.email });
      await req.session.save();

      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
};

export default withIronSession(handler, {
  password: process.env.SESSION_SECRET,
  cookieName: 'session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
});
