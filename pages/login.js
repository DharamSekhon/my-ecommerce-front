// // pages/login.js
// import { useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import Header from '@/components/Header';
// import Center from '@/components/Center';
// import styled from "styled-components";



// const PageContainer = styled.div`
//   background: linear-gradient(to right, #74A57F, #074F57); /* Adjust the colors as needed */;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const LoginContainer = styled.div`
//   background-color: #fff;
//   width: 800px; /* Adjust the width as needed */
//   display: flex;
//   border-radius: 16px; /* Adjust the border radius as needed */
//   overflow: hidden; /* Ensures the border-radius applies to child elements */
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const LeftSection = styled.div`
//   flex: 1;
//   padding: 20px;
//   text-align: center;
// `;

// const Image = styled.img`
//   width: 100px; /* Adjust the size as needed */
//   height: 100px; /* Adjust the size as needed */
//   border-radius: 50%;
//   object-fit: cover;
// `;

// const RightSection = styled.div`
//   flex: 1;
//   padding: 20px;
//   background-color: #D3D0CB;
  
// `;

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   padding: 8px;
//   margin-bottom: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//  width: 50%; /* Make both buttons the same width */
//   padding: 10px;
//   background-color: #e74c3c;
//   margin: 0 auto;
//   color: #fff;
//   border: none;
//   border-radius: 4px; /* Adjust the border radius as needed */
//   cursor: pointer;
//   margin-bottom: 10px; /* Optional: Add margin to separate the buttons */
  
// `;


// const ProviderText = styled.div`
//    margin-top: 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Text = styled.h1`
//  text-align: center;
// `;

// const GoogleButton = styled.button`
//     width: 50%;
//   margin: 0 auto; /* Center the button horizontally */
//   padding: 10px;
//   background-color: #4285f4;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-top: 10px;
//   align-items: center;
//   `;



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const result = await signIn('credentials', {
//       email,
//       password,
//       redirect: false, // Add this line
//     });
  
//     if (!result.error) {
//       // Redirect the user to the home page or any desired destination
//       router.push('/');
//     }
//   };

//     if (!result.error) {
//       // Redirect the user to the home page or any desired destination
//       router.push('/');
//     }
//   };

//   return (
//     <>
//     <Header/>
//     <PageContainer>
//     <LoginContainer>
//     <LeftSection>
//           <Image src="your-image-url.jpg" alt="User Image" />
//         </LeftSection>
//     {/* <div> */}
      
//     <RightSection>
//       <Text>User Login</Text>
//       <LoginForm onSubmit={handleSubmit}>
//         {/* <label>
//           Email: */}
          
//           <Input  type="email" value={email} placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
        
//         <br />
        
//           <Input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        
//         <br />
//         <Button type="submit">Login</Button>
//       </LoginForm>
//       <ProviderText>Or login with provider:</ProviderText>

//           <GoogleButton>Sign in with Google</GoogleButton>
//       </RightSection>

      
//     {/* </div> */}
//     </LoginContainer>
//     </PageContainer>
//     </>

//   );
// };

// export default Login;

//final
// pages/login.js
// import { useEffect, useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import Header from '@/components/Header';
// import styled from 'styled-components';

// const PageContainer = styled.div`
//   background: linear-gradient(to right, #74a57f, #074f57);
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const LoginContainer = styled.div`
//   background-color: #fff;
//   width: 800px;
//   display: flex;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const LeftSection = styled.div`
//   flex: 1;
//   padding: 20px;
//   text-align: center;
// `;

// const Image = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   object-fit: cover;
// `;

// const RightSection = styled.div`
//   flex: 1;
//   padding: 20px;
//   background-color: #d3d0cb;
// `;

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   padding: 8px;
//   margin-bottom: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 50%;
//   padding: 10px;
//   background-color: #e74c3c;
//   margin: 0 auto;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

// const Text = styled.h1`
//   text-align: center;
// `;

// const GoogleButton = styled.button`
//   width: 50%;
//   margin: 0 auto;
//   padding: 10px;
//   background-color: #4285f4;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-top: 10px;
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
//   const [loginInProgress, setLoginInProgress] = useState(false);

//   // useEffect(() => {
//   //   // Log the session whenever it changes
//   //   console.log('Current session:', session);
//   // }, [session]);

//  async function handleSubmit(ev) {
//     e.preventDefault();
//     // setLoginInProgress(true);
//    const {ok} = await fetch('/api/login',{
//       body: JSON.stringify({email, password}),
//       headers: {'Content-Type': 'application/json'},
//       method:'POST',
//     });
//     if (ok) {

//     } else {

//     }
//   await signIn('credentials', {email, password});
//     // setLoginInProgress(false);
//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });

//     if (result.error) {
//       // If there's an error, show a pop-up message
//       window.alert('Invalid credentials. Please register first.');
//     } else {
//       // Successful login, redirect the user
//       router.push('/');
//     }
//   };


//   return (
//     <>
//       <Header />
//       <PageContainer>
//         <LoginContainer>
//           <LeftSection>
//             {/* <Image src="your-image-url.jpg" alt="User Image" /> */}
//           </LeftSection>

//           <RightSection>
//             <Text>User Login</Text>
//             <LoginForm onSubmit={handleSubmit}>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Username"
//                 // disabled={loginInProgress}
//                 onChange={(ev) => setEmail(ev.target.value)}
//               />

//               <br />

//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 // disabled={loginInProgress}
//                 onChange={(ev) => setPassword(ev.target.value)}
//               />

//               <br />
//               <Button type="submit"  >Login</Button>
//             </LoginForm>
//             <div>Or login with provider:</div>
//             <GoogleButton >Sign in with Google</GoogleButton>
//           </RightSection>
//         </LoginContainer>
//       </PageContainer>
//     </>
//   );
// };

// export default Login;

// pages/login.js
import Login from "@/components/login";

const LoginPage = () => {
  return (
    <div>
      
      <Login />
    </div>
  );
};

export default LoginPage;


// import React from 'react';
// import styled from 'styled-components';

// // Define the colors and fonts used in the webpage
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
//   border: none;
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
// const logoSrc = '';
// const googleSrc = '';
// const facebookSrc = '';
// const appleSrc = '';

// async function loginDiscord(e) {
//   e.preventDefault();
//   await signIn('twitter', { callbackUrl: '/' });
  
// }
// // Define the main component that renders the webpage
// const App = () => {
//   return (
//     <backCon>
//     <Container>
//       <LogoSection>
//         {/* <LogoImage src={logoSrc} /> */}
//         <LogoText>Welcome to </LogoText>
//         <LogoText>Ecommerce Website</LogoText>
//       </LogoSection>
//       <FormSection>
//         <Form>
//           <SignInText>Sign in</SignInText>
          
          
//           <SocialButtons>
//             <SocialButton style={{ backgroundColor: '#DB4437' }}>
//               <SocialIcon src={googleSrc} />
//               Continue with Google
//             </SocialButton>
//             <SocialButton style={{ backgroundColor: '#3B5998' }}>
//               <SocialIcon src={facebookSrc} />
//               Continue with Facebook
//             </SocialButton>
//             <SocialButton style={{ backgroundColor: '#000000' }}>
//               <SocialIcon src={appleSrc} />
//               Continue with Github
//             </SocialButton>
//             <SocialButton style={{ backgroundColor: '#DB4437' }}>
//               <SocialIcon src={appleSrc} />
//               Continue with Reddit
//             </SocialButton>
//             <SocialButton style={{ backgroundColor: 'black' }}>
//               <SocialIcon src={appleSrc} />
//               Continue with Discord
//             </SocialButton>
//             <SocialButton style={{ backgroundColor: 'black' }}>
//               <SocialIcon onClick={loginDiscord} src={appleSrc} />
//               Continue with twitter
//             </SocialButton>
//           </SocialButtons>
//         </Form>
//       </FormSection>
//     </Container>
//     </backCon>
//   );
// };

// export default App;
