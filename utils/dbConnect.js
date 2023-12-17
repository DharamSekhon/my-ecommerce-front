// utils/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = 'your-mongodb-connection-string';

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return; // Already connected
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
