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

//fianlllllllllllllll
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Header from './Header';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import styled from 'styled-components';



// // const PageContainer = styled.div`
// //   background: linear-gradient(to right, #586f6b, #7f9183);
// //   background-size: cover; /* Adjust as needed */
// //   height: 100vh;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // Rest of your component code...

// // const PageContainer = styled.div`
// //   background: linear-gradient(to right, #74a57f, #074f57);
// //   height: 100vh;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const LoginContainer = styled.div`
// //   background-color: #fff;
// //   width: 800px;
// //   display: flex;
// //   border-radius: 16px;
// //   overflow: hidden;
// //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// // `;

// // const LeftSection = styled.div`
// //   flex: 1;
// //   padding: 20px;
// //   text-align: center;
// // `;

// // const Image = styled.img`
// //   width: 100%;
// //   height: 100%;
// //   /* border-radius: 50%; */
// //   /* object-fit: cover; */
// // `;

// // const RightSection = styled.div`
// //   flex: 1;
// //   padding: 20px;
// //   background-color: #cfc0bd;
// // `;

// // const LoginForm = styled.form`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const Input = styled.input`
// //   padding: 8px;
// //   margin-top: 10px;
// //   margin-bottom: 16px;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
  
// // `;

// // const PasswordInput = styled.input`
// //   padding: 8px;
// //   margin-top: 8px;
// //   margin-bottom: 0px;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// // `;

// // const Button = styled.button`
// //   width:70%;
// //   padding: 10px;
// //   background-color: #324a5f;
// //   margin: 0 auto;
// //   color: #fff;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   /* margin-bottom: 4px; */
// // `;


// // const Text = styled.h1`
// //   text-align: center;
// //   margin-bottom: 0;
// // `;
// // const Text1 = styled.h1`
// //   text-align: center;
// //   margin-top: 0%;
// // `;
// // const Text3 = styled.p`
// //  font-size: medium;
// //   color: gray;
// //   text-align: center;
// // `;

// // const Text4 = styled.p`
// //   font-size: small;
// //   color: gray;
// //   text-align: center;
// // `;

// // const GoogleForm = styled.form`
// //   display: flex;
// //   flex-direction: column;
// // `;


// // const GoogleButton = styled.button`
// //   width: 70%;
// //   margin: 0 auto;
// //   padding: 10px;
// //   background-color: #324a5f;
// //   color: #fff;
// //   border: 0.5;
// //   /* border-color: black; */
// //   border-radius: 4px;
// //   cursor: pointer;
  
  
// //   text-align: center;
// //   margin-bottom: 10px;
// //   /* margin-top: 15px; */
// // `;

// // const Button1 = styled.button`
// //   width:60%;
// //   padding: 10px;
// //   background-color: #324a5f;
// //   margin: 0 auto;
// //   color: #fff;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   margin-bottom: 10px;
  
  
// // `;


// // const PasswordToggle = styled.span`
// //    cursor: pointer;
// //   color: gray;
// //   margin-top: 2px;
// //   margin-right: 1px;
// //   margin-bottom: 16px;
// //   font-size: small;
// //   text-align:right;
// //   `;

// // const Linkstyle = styled.p`
// //   color: black;
// //   text-decoration: underline;
// // `;
// // const ForgotPasswordLink = styled.span`
// //   color: black;
// //   text-decoration: underline;
// //   cursor: pointer;
// // `;




// const colors = {
//   darkBlue: '#0E1E2F',
//   white: '#FFFFFF',
//   lightGrey: '#E8E8E8',
//   black: '#000000',
// };

// const fonts = {
//   primary: 'Roboto, sans-serif',
//   secondary: 'Poppins, sans-serif',
// };

// // Create a container component that covers the entire screen

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   /* background-color: cyan; */
//   background-size: cover; /* Change cover to contain or other values */
//   background-position: center;
//   background-image: url('kelly.jpg');
//   margin: auto ;
  
// `;

// // Create a component for the logo section on the left side
// const LogoSection = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* background-color: ${colors.darkBlue}; */
// `;

// // Create a component for the logo image on the left side
// const LogoImage = styled.img`
//   height: 80px;
//   width: auto;
//   /* margin-bottom: 10px; */
// `;

// // Create a component for the logo text on the left side
// const LogoText = styled.div`
//   font-family: ${fonts.secondary};
//   font-size: 36px;
//   font-weight: bold;
//   margin-left: 100px;
//   color: ${colors.white};
// `;

// // Create a component for the form section on the right side
// const FormSection = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// // Create a component for the form element on the right side
// const Form = styled.form`
//   width: 400px;
//   padding: 20px;
//   background-color: ${colors.white};
//   border-radius: 10px;
//   height: auto;
  
//   /* box-shadow: 0 0 10px ${colors.lightGrey}; */
// `;

// // Create a component for the sign in text above the form element
// const SignInText = styled.div`
//   font-family: ${fonts.primary};
//   font-size: 30px;
//   font-weight: bold;
//   color: ${colors.black};
//   text-align: center;
//   margin-bottom: 20px;
// `;

// // Create a component for the input field for email address

// // Create a component for the continue button below the input field
// ;

// // Create a component for the or text below the continue button

// const SocialButtons = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center; /* Center-align the content */
// `;

// // Update the SocialButton component
// const SocialButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 40px; //Remove width property to allow it to take the full width of the container
//   border: 1;
//   border-radius: 5px;
//   font-family: ${fonts.primary};
//   font-size: 18px;
//   font-weight: bold;
//   color: ${colors.white};
//   cursor: pointer;
//   margin: 5px;
//   margin-bottom: 15px;
//   width: 80%; /* Add this to make the button take the full width of the container */
// `;

// // Update the SocialIcon component (no change needed)
// const SocialIcon = styled.img`
//   height: 20px;
//   width: auto;
//   margin-right: 10px;
// `;
// // Create a component for the social buttons below the or text
// // const SocialButtons = styled.div`
  
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   width: auto;
// //   margin: 0 10px;
// // `;

// // // Create a component for the social button for each provider
// // const SocialButton = styled.button`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   width: 250px;
// //   height: 40px;
// //   border: none;
// //   border-radius: 5px;
// //   font-family: ${fonts.primary};
// //   font-size: 18px;
// //   font-weight: bold;
// //   color: ${colors.white};
// //   cursor: pointer;
// //   margin: 5px;
// // `;

// // // Create a component for the social icon for each provider
// // const SocialIcon = styled.img`
// //   height: 20px;
// //   width: auto;
// //   margin-right: 10px;
// // `;

// // Define the sources of the logo and social icons
// const discordSrc = '/discordlogo.png';
// const googleSrc = '/googlelogo.png';
// const facebookSrc = 'Facebooklogo.png';
// const redditSrc = '/redditlogo.png';
// const githubSrc = '/githublogo.png';



// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   // async function login() {
//   //   await signIn('google');
//   // }
//   async function login(e) {
//     e.preventDefault();
//     await signIn('google', { callbackUrl: '/' });
    
//   }
//   async function loginReddit(e) {
//     e.preventDefault();
//     await signIn('reddit', { callbackUrl: '/' });
    
//   }

//   async function loginGithub(e) {
//     e.preventDefault();
//     await signIn('github', { callbackUrl: '/' });
    
//   }

//   async function loginFacebook(e) {
//     e.preventDefault();
//     await signIn('facebook', { callbackUrl: '/' });
    
//   }

//   async function loginDiscord(e) {
//     e.preventDefault();
//     await signIn('discord', { callbackUrl: '/' });
    
//   }
  
    
//   const handleLogin = async (e) => {
//     e.preventDefault();

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

//         // Display an alert for invalid credentials
//         window.alert('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   const handleForgotPasswordClick = () => {
//     router.push('/register');
//   };

//   return (
//     <>
      
//       <Container>
//       <title>Sign In</title>
//         <LogoSection>
//         <LogoText>Welcome to </LogoText>
//         <LogoText>Ecommerce Website</LogoText>
//       </LogoSection>
          
//         <FormSection>
//           <Form>
//             <SocialButtons>
//             <SignInText>Log in</SignInText>
//               <SocialButton onClick={login} style={{ backgroundColor: '#CCCCCC', color:'black' }}>Continue with google</SocialButton>
//               <SocialButton onClick={loginGithub} style={{ backgroundColor: 'black' }}>Continue with github</SocialButton>
//               <SocialButton onClick={loginFacebook} style={{ backgroundColor: '#0D4982', bordercolors:'#0D4982' }}>Continue with facebook</SocialButton>
//               <SocialButton onClick={loginReddit} style={{ backgroundColor: '#FF4500' }}>Continue with Reddit</SocialButton>

//               <SocialButton onClick={loginDiscord} style={{ backgroundColor: '#5865F2' }}>Continue with discord</SocialButton>
//               </SocialButtons>
//           </Form>
//         </FormSection>

//         {/* <GoogleForm>
//         <Text3>or Signin with Provider</Text3>
//         <GoogleButton onClick={login}>Sign in with google</GoogleButton>
//         <GoogleButton onClick={loginGithub}>Sign in with github</GoogleButton>
//         <GoogleButton onClick={loginDiscord}>Sign in with discord</GoogleButton>
//         <GoogleButton onClick={loginFacebook}>Sign in with facebook</GoogleButton>
//         <GoogleButton onClick={loginReddit}>Sign in with facebook</GoogleButton>
//         </GoogleForm> */}



//         {/* <Text4>Do not have an Account? <ForgotPasswordLink onClick={handleForgotPasswordClick}>Sign Up now</ForgotPasswordLink></Text4>
        
//         </RightSection>
     
//       </LoginContainer> */}
//       </Container>
//     </>
//   );
// };

// export default Login;


import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import styled from 'styled-components';
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const colors = {
  darkBlue: '#0E1E2F',
  white: '#FFFFFF',
  lightGrey: '#E8E8E8',
  black: '#000000',
};

const fonts = {
  primary: 'Roboto, sans-serif',
  secondary: 'Poppins, sans-serif',
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url('adrien.jpg');
  margin: auto;
`;

const LogoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;
`;

const LogoText = styled.div`
  font-family: ${fonts.secondary};
  font-size: 36px;
  font-weight: bold;
  margin-left: 150px;
  color: ${colors.white};
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  height: auto;
`;

const SignInText = styled.div`
  font-family: ${fonts.primary};
  font-size: 30px;
  font-weight: bold;
  color: ${colors.black};
  text-align: center;
  margin-bottom: 20px;
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1;
  border-radius: 5px;
  font-family: ${fonts.primary};
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  cursor: pointer;
  margin: 5px;
  margin-bottom: 15px;
  width: 80%;
`;

const SocialIcon = styled.img`
  height: 20px;
  width: auto;
  margin-right: 27px;
   
`;
const StyledGithubIcon = styled(FaGithubSquare)`
  display: inline-block;
  height: 25px; /* Adjust the height as needed */
  width: auto; /* Automatically adjust the width based on height */
  /* color: #ffffff; Set the desired color */
  margin-right: 1.9rem; /* Adjust the margin as needed */
`;

const StyledFacebookIcon = styled(FaFacebook)`
  display: inline-block;
  height: 25px; /* Adjust the height as needed */
  width: auto; /* Automatically adjust the width based on height */
  /* color: #ffffff; Set the desired color */
  margin-right: 0.7rem; /* Adjust the margin as needed */
`;

const StyledRedditIcon = styled(FaReddit)`
  display: inline-block;
  height: 25px; /* Adjust the height as needed */
  width: auto; /* Automatically adjust the width based on height */
  /* color: #ffffff; Set the desired color */
  margin-right: 2rem; /* Adjust the margin as needed */
`;

const StyledDiscordIcon = styled(FaDiscord)`
  display: inline-block;
  height: 25px; /* Adjust the height as needed */
  width: auto; /* Automatically adjust the width based on height */
  /* color: #ffffff; Set the desired color */
  margin-right: 1.5rem; /* Adjust the margin as needed */
`;

const SocialButtonWithGithubIcon = ({ onClick, style, alt }) => (
  <SocialButton onClick={onClick} style={style}>
    {alt === 'GitHub' && <StyledGithubIcon/>}
    Continue with {alt}
  </SocialButton>
);

const SocialButtonWithFacebookIcon = ({ onClick, style, alt }) => (
  <SocialButton onClick={onClick} style={style}>
    {alt === 'Facebook' && <StyledFacebookIcon />}
    Continue with {alt}
  </SocialButton>
);

const SocialButtonWithGoogleIcon = ({ onClick, style, alt }) => (
  <SocialButton onClick={onClick} style={style}>
    {alt === 'Google' && <FaGoogle className="inline-block h-8 w-8 text-white mr-2" />}
    Continue with {alt}
  </SocialButton>
);

const SocialButtonWithRedditIcon = ({ onClick, style, alt }) => (
  <SocialButton onClick={onClick} style={style}>
    {alt === 'Reddit' && <StyledRedditIcon />}
    Continue with {alt}
  </SocialButton>
);

const SocialButtonWithDiscordIcon = ({ onClick, style, alt }) => (
  <SocialButton onClick={onClick} style={style}>
    {alt === 'Discord' && <StyledDiscordIcon />}
    Continue with {alt}
  </SocialButton>
);

const SocialButtonWithIcon = ({ onClick, style, src, alt }) => (
  <SocialButton onClick={onClick} style={style}>
    <SocialIcon src={src} alt={alt} />
    Continue with {alt}
  </SocialButton>
);

const Login = () => {
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    await signIn('google', { callbackUrl: '/' });
  };

  const loginGithub = async (e) => {
    e.preventDefault();
    await signIn('github', { callbackUrl: '/' });
  };

  const loginDiscord = async (e) => {
    e.preventDefault();
    await signIn('discord', { callbackUrl: '/' });
  };

  const loginFacebook = async (e) => {
    e.preventDefault();
    await signIn('facebook', { callbackUrl: '/' });
  };

  const loginReddit = async (e) => {
    e.preventDefault();
    await signIn('reddit', { callbackUrl: '/' });
  };
  // Add more login functions for other social platforms as needed

  return (
    <>
      <Container>
        <LogoSection>
          <LogoText>Welcome to </LogoText>
          <LogoText>Ecommerce Website</LogoText>
        </LogoSection>
        <FormSection>
          <Form>
            <SocialButtons>
              <SignInText>Log in</SignInText>
              <SocialButtonWithIcon
                onClick={login}
                style={{ backgroundColor: '#CCCCCC', color: 'black' }}
                src="/googlelogo.png" // Replace with your Google icon path
                alt="Google"
              />
              <SocialButtonWithFacebookIcon
                onClick={loginFacebook}
                style={{ backgroundColor: '#0D4982', color: 'white' }}
                // src="/facebooklogo.png" // Replace with your Google icon path
                alt="Facebook"
                
              />
              <SocialButtonWithGithubIcon
                onClick={loginGithub}
                style={{ backgroundColor: 'black' }}
                // src="/Github.png" // Replace with your GitHub icon path
                alt="GitHub"
              />

              <SocialButtonWithRedditIcon
                onClick={loginReddit}
                style={{ backgroundColor: '#FF4500' }}
                // src="/redditlogo.png" // Replace with your GitHub icon path
                alt="Reddit"
              />

              <SocialButtonWithDiscordIcon
                onClick={loginDiscord}
                style={{ backgroundColor: '#5865F2' }}
                // src="/discordlogo.png" // Replace with your GitHub icon path
                alt="Discord"
              />
              {/* Add more social buttons as needed */}
            </SocialButtons>
          </Form>
        </FormSection>
      </Container>
    </>
  );
};

export default Login;
