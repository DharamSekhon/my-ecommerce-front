import {model, models, Schema} from "mongoose";
import bcrypt from 'bcrypt';


// const userSchema = new mongoose.Schema({
  const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true ,
    validate: pass => {
          if (!pass?.length || pass.length < 5){
            new Error('password must be at least 5 characters');
          }
        },
  },
  // Add more fields as needed
});

userSchema.post('validate', function(user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
})

// const User = mongoose.model('User', userSchema, 'users'); // Specify the collection name
const newUser = models?.User || model('User', userSchema);

export default newUser;