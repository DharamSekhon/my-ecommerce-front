// // pages/register.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user registration
//       const response = await axios.post('/api/register', formData);

//       // Handle successful registration (you might want to redirect the user, show a success message, etc.)
//       console.log('Registration successful:', response.data);
//     } catch (error) {
//       // Handle registration error (show error message, log the error, etc.)
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" value={formData.username} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



//before trying new copy
// pages/register.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import styled from 'styled-components';



const PageContainer = styled.div`
  background: linear-gradient(to right, #586f6b, #7f9183);
  background-size: cover; /* Adjust as needed */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Rest of your component code...

// const PageContainer = styled.div`
//   background: linear-gradient(to right, #74a57f, #074f57);
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const GoogleForm = styled.form`
  display: flex;
  flex-direction: column;
`;


const GoogleButton = styled.button`
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  background-color: #324a5f;
  color: #fff;
  border: 0.5;
  /* border-color: black; */
  border-radius: 4px;
  cursor: pointer;
  
  
  text-align: center;
  margin-bottom: 10px;
  /* margin-top: 15px; */
`;

const LoginContainer = styled.div`
  background-color: #fff;
  width: 800px;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
  /* object-fit: cover; */
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #cfc0bd;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PasswordInput = styled.input`
  padding: 8px;
  margin-bottom: 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;



const Button = styled.button`
  width:60%;
  padding: 10px;
  background-color: #324a5f;
  margin: 0 auto;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Text = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;
const Text1 = styled.h1`
  text-align: center;
  margin-top: 0%;
`;
const Text3 = styled.p`
  text-align: center;
  color: black;
  margin: auto;
`;

const Text4 = styled.p`
  font-size: small;
  color: gray;
  text-align: center;
`;

// const GoogleButton = styled.button`
//   width: 60%;
//   margin: 0 auto;
//   padding: 10px;
//   background-color: #324a5f;
//   color: #fff;
//   border: 0.5;
//   /* border-color: black; */
//   border-radius: 4px;
//   cursor: pointer;
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   margin-bottom: 10px;
//   /* margin-top: 15px; */
// `;

const PasswordToggle = styled.span`
  cursor: pointer;
  color: gray;
  margin-top: 2px;
  margin-right: 1px;
  margin-bottom: 16px;
  font-size: small;
  text-align:right;
`;

const Linkstyle = styled.p`
  color: black;
  text-decoration: underline;
`;

const ForgotPasswordLink = styled.span`
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;
const Text6 = styled.p`
 font-size: medium;
  color: gray;
  text-align: center;
`;





const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function login(e) {
    e.preventDefault();
    await signIn('google', { callbackUrl: '/' });
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', formData);

      console.log('Registration successful:', response.data);

      // Redirect to login page after successful registration
      router.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  const handleForgotPasswordClick = () => {
    router.push('/login');
  };

  return (
    <>
    <PageContainer>
      <LoginContainer>
        <LeftSection>
          <Image src='/loginform.png'/>
        </LeftSection>

        <RightSection>
          <Text>User 
            <br/>Registration</Text>
          <LoginForm onSubmit={handleSubmit}>
            <br/>
            
              <Input type="text" placeholder="Name" name="username" value={formData.username} onChange={handleChange} />
            
           
            
              <Input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
            
           
            
              <PasswordInput type={showPassword ? 'text' : 'password'} placeholder='Password' name="password" value={formData.password} onChange={handleChange} />
              <PasswordToggle onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'} Password
              </PasswordToggle>
            
            <Button type="submit">Register</Button>
        </LoginForm>

        <GoogleForm>
        <Text6>or Signup with Provider</Text6>
        <GoogleButton onClick={login}>Signup with google</GoogleButton>
        </GoogleForm>

        <Text4>Already have an account?<ForgotPasswordLink onClick={handleForgotPasswordClick}>Click here to login</ForgotPasswordLink></Text4>

        </RightSection>
      
      </LoginContainer>
      </PageContainer>
      </>
  );
};

export default Register;
