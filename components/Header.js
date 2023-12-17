import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";

const StyledHeader = styled.header`
  background-color: #07393C; // top nav bar full bg
  position:sticky;
  top:0;
  z-index:10;
`;
const Logo = styled(Link)`
  color:#fff;  //ecommerce logo color
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #07393C; //home nav font background
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:white;  //home nav font 
  text-decoration:none;
  min-width:30px;
  padding: 10px 0;
  svg{
    height:20px;
  }
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a{
    display:inline-block;
    min-width:20px;
    color:white; //search
    svg{
      width:14px;
      height:14px;
    }
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
            {/* <NavLink href={'/register'}>Register</NavLink>
            <NavLink href={'/login'}>Login</NavLink> */}
          </StyledNav>
          <SideIcons>
            <Link href={'/search'}><SearchIcon /></Link>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}






// ... (previous imports)

// ... (previous imports)

// import { useSession, signIn, signOut } from 'next-auth/react';

// const Header = () => {
//   const { cartProducts } = useContext(CartContext);
//   const [mobileNavActive, setMobileNavActive] = useState(false);
//   const { data: session } = useSession(); 
//   // const { data: session } = useSession();
// console.log(session); // Add this line to check the session object
// // Use the useSession hook to check the authentication status

//   return (
//     <StyledHeader>
//       <Center>
//         <Wrapper>
//           <Logo href={'/'}>Ecommerce</Logo>
//           <StyledNav mobileNavActive={mobileNavActive}>
//             <NavLink href={'/'}>Home</NavLink>
//             <NavLink href={'/products'}>All products</NavLink>
//             <NavLink href={'/categories'}>Categories</NavLink>
//             {session ? (
//               // If user is authenticated, display the user's name and a sign-out button
//               <>
//                 <NavLink href={'/account'}>{session.user.email}</NavLink>
//                 <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
//                 <NavButton onClick={() => signOut()}>Sign Out</NavButton>
//               </>
//             ) : (
//               // If user is not authenticated, display the sign-in and register buttons
//               <>
//                 <NavLink href={'/login'}>Login</NavLink>
//                 <NavLink href={'/register'}>Register</NavLink>
//               </>
//             )}
//           </StyledNav>
//           <SideIcons>
//             <Link href={'/search'}><SearchIcon /></Link>
//             <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
//               <BarsIcon />
//             </NavButton>
//           </SideIcons>
//         </Wrapper>
//       </Center>
//     </StyledHeader>
//   );
// };

// export default Header;
