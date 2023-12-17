// import React from 'react';
// import styled from 'styled-components';

// // Define the colors and fonts used in the webpage
// const colors = {
//   lightGrey: '#F0F0F0',
//   beige: '#F9F0E1',
//   white: '#FFFFFF',
//   red: '#FF0000',
//   black: '#000000',
// };

// const fonts = {
//   primary: 'Arial, sans-serif',
//   secondary: 'Comic Sans MS, cursive, sans-serif',
// };

// // Create a container component that covers the entire screen
// const Container = styled.div`
//   display: flex;
//   height: 100%;
//   width: 100%;
// `;

// // Create a component for the login section on the left side
// const LoginSection = styled.div`
//   flex: 1;
//   background-color: ${colors.red};
//   border-radius: 20px;
//   margin: 50px;
//   padding: 50px;
//   box-shadow: 5px 5px 10px ${colors.lightGrey};
// `;

// // Create a component for the logo at the top of the login section
// const Logo = styled.div`
//   font-family: ${fonts.secondary};
//   font-size: 36px;
//   font-weight: bold;
//   color: ${colors.black};
//   text-align: center;
//   margin-bottom: 20px;
// `;

// // Create a component for the welcome text below the logo
// const WelcomeText = styled.div`
//   font-family: ${fonts.primary};
//   font-size: 24px;
//   color: ${colors.black};
//   text-align: center;
//   margin-bottom: 10px;
// `;

// // Create a component for the sign in text below the welcome text
// const SignInText = styled.div`
//   font-family: ${fonts.primary};
//   font-size: 36px;
//   color: ${colors.black};
//   text-align: center;
//   margin-bottom: 20px;
// `;

// // Create a component for the input fields for email and password
// const InputField = styled.input`
//   display: block;
//   width: 80%;
//   height: 40px;
//   border: 1px solid ${colors.lightGrey};
//   border-radius: 10px;
//   margin: 10px auto;
//   padding: 10px;
//   font-family: ${fonts.primary};
//   font-size: 18px;
//   color: ${colors.black};
// `;

// // Create a component for the sign in button below the input fields
// const SignInButton = styled.button`
//   display: block;
//   width: 80%;
//   height: 50px;
//   border: none;
//   border-radius: 10px;
//   margin: 10px auto;
//   padding: 10px;
//   font-family: ${fonts.primary};
//   font-size: 24px;
//   font-weight: bold;
//   color: ${colors.white};
//   background-color: ${colors.red};
//   cursor: pointer;
// `;

// // Create a component for the forgot password text below the sign in button
// const ForgotPasswordText = styled.div`
//   font-family: ${fonts.primary};
//   font-size: 18px;
//   color: ${colors.black};
//   text-align: right;
//   margin-right: 50px;
// `;

// // Create a component for the sign up text below the forgot password text
// const SignUpText = styled.div`
//   font-family: ${fonts.primary};
//   font-size: 18px;
//   color: ${colors.black};
//   text-align: center;
//   margin-top: 10px;
// `;

// // Create a component for the illustration section on the right side
// const IllustrationSection = styled.div`
//   flex: 1;
//   background-color: ${colors.beige};
//   position: relative;
// `;

// // Create a component for the illustration image on the right side
// const IllustrationImage = styled.img`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   height: 80%;
//   width: auto;
// `;

// // Define the source of the illustration image
// const illustrationSrc =
//   'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fe-commerce-cart%2F65&psig=AOvVaw2_T0dTmBJzroOEVucxUz2w&ust=1702734901984000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCLDpu_7LkYMDFQAAAAAdAAAAABC0Ag';

// // Define the main component that renders the webpage
// const App = () => {
//   return (
//     <Container>
//       <LoginSection>
//         <Logo>Logo Here</Logo>
//         <WelcomeText>Welcome back !!</WelcomeText>
//         <SignInText>Sign in</SignInText>
//         <InputField type="email" placeholder="test@gmail.com" />
//         <InputField type="password" placeholder="**********" />
//         <SignInButton>SIGN IN </SignInButton>
//         <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
//         <SignUpText>I don't have an account? Sign up</SignUpText>
//       </LoginSection>
//       <IllustrationSection>
//         <IllustrationImage src={illustrationSrc} />
//       </IllustrationSection>
//     </Container>
//   );
// };

// export default App;
