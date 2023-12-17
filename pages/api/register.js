// pages/api/register.js
import connectDB from '../../utils/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    await connectDB();

    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful.' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

