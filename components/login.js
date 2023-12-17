// components/Login.js
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Header from './Header';

// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const handleLogin = async (e) => {
//     e.preventDefault();  // Prevent default form submission behavior
  
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
  
//       if (response.ok) {
//         router.push('/afterlogin');
//       } else {
//         const data = await response.json();
//         console.error('Login failed:', data.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };
  
//   return (
//     <>
//     <Header/>
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default Login;


import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
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
  margin-top: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const PasswordInput = styled.input`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width:70%;
  padding: 10px;
  background-color: #324a5f;
  margin: 0 auto;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* margin-bottom: 4px; */
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
 font-size: medium;
  color: gray;
  text-align: center;
`;

const Text4 = styled.p`
  font-size: small;
  color: gray;
  text-align: center;
`;

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

const Button1 = styled.button`
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


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // async function login() {
  //   await signIn('google');
  // }
  async function login(e) {
    e.preventDefault();
    await signIn('google', { callbackUrl: '/' });
    
  }
    
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/afterlogin');
      } else {
        const data = await response.json();
        console.error('Login failed:', data.message);

        // Display an alert for invalid credentials
        window.alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleForgotPasswordClick = () => {
    router.push('/register');
  };

  return (
    <>
      {/* <Header /> */}
      <PageContainer>
        <LoginContainer>
          <title>Sign In</title>
        <LeftSection>
          <Image src="/loginform.png" />
        </LeftSection>

        <RightSection>
          <Text>Sign in </Text>
          <Text1>to your Account</Text1>
          <LoginForm onSubmit={handleLogin}>
          {/* <label>Email:</label> */}
          <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          {/* <label>Password:</label> */}
          <PasswordInput
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <PasswordToggle onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'} Password
              </PasswordToggle>
          <Button type="submit">Signin</Button>
        </LoginForm>

        <GoogleForm>
        <Text3>or Signin with Provider</Text3>
        <GoogleButton onClick={login}>Signin with google</GoogleButton>
        </GoogleForm>

        <Text4>Do not have an Account? <ForgotPasswordLink onClick={handleForgotPasswordClick}>Sign Up now</ForgotPasswordLink></Text4>
        
        </RightSection>
     
      </LoginContainer>
      </PageContainer>
    </>
  );
};

export default Login;
