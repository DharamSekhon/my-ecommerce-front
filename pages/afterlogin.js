// pages/afterlogin.js
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Header from '@/components/Header';

// const AfterLogin = () => {
//   const router = useRouter();
  

//   useEffect(() => {
//     // Add any logic you need upon entering the after-login page
//   }, []);

//   return (
//     <>
//     <Header/>
//     <div>
        
//       <h2>Welcome to the After Login Page!</h2>
//     </div>
//     </>
//   );
// };

// export default AfterLogin;


// import Header from "@/components/Header";
import Title from "@/components/Title";
import Center from "@/components/Center";
import {signIn, signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import {RevealWrapper} from "next-reveal";
import Input from "@/components/Input";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import ProductBox from "@/components/ProductBox";
import Tabs from "@/components/Tabs";
import SingleOrder from "@/components/SingleOrder";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";



//Header
import Link from "next/link";
// import styled from "styled-components";
// import Center from "@/components/Center";
// import {useContext, useState} from "react";
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

  function Header() {
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
            <NavLink href={'/afterlogin'}>Account</NavLink>
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








const ColsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 40px;
  margin: 40px 0;
  p{
    margin:5px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

const WishedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export default function AfterLogin() {
  const {data:session} = useSession();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [postalCode,setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');
  const [addressLoaded,setAddressLoaded] = useState(true);
  const [wishlistLoaded,setWishlistLoaded] = useState(true);
  const [orderLoaded,setOrderLoaded] = useState(true);
  const [wishedProducts,setWishedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('Orders');
  const [orders, setOrders] = useState([]);
  const router = useRouter('');
  

  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }
  async function login() {
    await signIn('google');
    
  }
  function saveAddress() {
    const data = {name,email,city,streetAddress,postalCode,country};
    axios.put('/api/addressafterlogin', data);
  }
  useEffect(() => {
  //   if (!session) {
  //     return;
  //   }
  //   setAddressLoaded(false);
  //   setWishlistLoaded(false);
  //   setOrderLoaded(false);
  //   axios.get('/api/address').then(response => {
  //     setName(response.data.name);
  //     setEmail(response.data.email);
  //     setCity(response.data.city);
  //     setPostalCode(response.data.postalCode);
  //     setStreetAddress(response.data.streetAddress);
  //     setCountry(response.data.country);
  //     setAddressLoaded(true);
  //   });
  //   axios.get('/api/wishlist').then(response => {
  //     setWishedProducts(response.data.map(wp => wp.product));
  //     setWishlistLoaded(true);
  //   });
  //   axios.get('/api/orders').then(response => {
  //     setOrders(response.data);
  //     setOrderLoaded(true);
  //   });
  // }, [session]);


  // useEffect(() => {
  //   if (session) {
  //     return;
  //   }
  //   setAddressLoaded(false);
  //   setWishlistLoaded(false);
  //   setOrderLoaded(false);
  //   axios.get('/api/address').then(response => {
  //     // Check if response.data is not null or undefined
  //     if (response.data) {
  //       setName(response.data.name);
  //       setEmail(response.data.email);
  //       setCity(response.data.city);
  //       setPostalCode(response.data.postalCode);
  //       setStreetAddress(response.data.streetAddress);
  //       setCountry(response.data.country);
  //     } else {
  //       // Handle the case where response.data is null or undefined
  //       console.error('Invalid response data for address');
  //       // You might want to set default values or handle the error in some way
  //     }
  //     setAddressLoaded(true);
  //   }).catch(error => {
  //     console.error('Error fetching address data:', error);
  //     // Handle the error, e.g., show an error message to the user
  //   });
  
  //   axios.get('/api/wishlist').then(response => {
  //     setWishedProducts(response.data.map(wp => wp.product));
  //     setWishlistLoaded(true);
  //   }).catch(error => {
  //     console.error('Error fetching wishlist data:', error);
  //     // Handle the error, e.g., show an error message to the user
  //   });
  
  //   axios.get('/api/orders').then(response => {
  //     setOrders(response.data);
  //     setOrderLoaded(true);
  //   }).catch(error => {
  //     console.error('Error fetching orders data:', error);
  //     // Handle the error, e.g., show an error message to the user
    // });
  }, [session]);


  function productRemovedFromWishlist(idToRemove) {
    setWishedProducts(products => {
      return [...products.filter(p => p._id.toString() !== idToRemove)];
    });
  }
  return (
    <>
      <Header />
      <Center>
        <ColsWrapper>
          <div>
            <RevealWrapper delay={0}>
              <WhiteBox>
                <Tabs
                  tabs={['Orders','Wishlist']}
                  active={activeTab}
                  onChange={setActiveTab}
                />
                {/* {activeTab === 'Orders' && (
                  <>
                    {!orderLoaded && (
                      <Spinner fullWidth={true} />
                    )}
                    {orderLoaded && (
                      <div>
                        {orders.length === 0 && (
                          <p>Login to see your orders</p>
                        )}
                        {orders.length > 0 && orders.map(o => (
                          <SingleOrder {...o} />
                        ))}
                      </div>
                    )}
                  </>
                )} */}


{activeTab === 'Orders' && (
  <>
    {!orderLoaded && (
      <Spinner fullWidth={true} />
    )}
    {orderLoaded && (
      <div>
        {orders.length === 0 && !session && (
          <p>No orders placed yet.</p>
        )}
        {orders.length === 0 && session && (
          <p>Login to see your orders</p>
        )}
        {orders.length > 0 && orders.map(o => (
          <SingleOrder key={o.orderId} {...o} />
        ))}
      </div>
    )}
  </>
)}



                {activeTab === 'Wishlist' && (
                  <>
                    {!wishlistLoaded && (
                      <Spinner fullWidth={true} />
                    )}
                    {wishlistLoaded && (
                      <>
                        <WishedProductsGrid>
                          {wishedProducts.length > 0 && wishedProducts.map(wp => (
                            <ProductBox key={wp._id} {...wp} wished={true} onRemoveFromWishlist={productRemovedFromWishlist} />
                          ))}
                        </WishedProductsGrid>
                        {wishedProducts.length === 0 && (
                          <>
                            {!session && (
                              <p>Your wishlist is empty</p>
                            )}
                            {session && (
                              <p>Login to add products to your wishlist</p>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>{!session ? 'Account details' : 'Login'}</h2>
                {!addressLoaded && (
                  <Spinner fullWidth={true} />
                )}
                {/* {addressLoaded && !session && ( */}
                  <>
                    <Input type="text"
                           placeholder="Name"
                           value={name}
                           name="name"
                           onChange={ev => setName(ev.target.value)} />
                    <Input type="text"
                           placeholder="Email"
                           value={email}
                           name="email"
                           onChange={ev => setEmail(ev.target.value)}/>
                    <CityHolder>
                      <Input type="text"
                             placeholder="City"
                             value={city}
                             name="city"
                             onChange={ev => setCity(ev.target.value)}/>
                      <Input type="text"
                             placeholder="Postal Code"
                             value={postalCode}
                             name="postalCode"
                             onChange={ev => setPostalCode(ev.target.value)}/>
                    </CityHolder>
                    <Input type="text"
                           placeholder="Street Address"
                           value={streetAddress}
                           name="streetAddress"
                           onChange={ev => setStreetAddress(ev.target.value)}/>
                    <Input type="text"
                           placeholder="Country"
                           value={country}
                           name="country"
                           onChange={ev => setCountry(ev.target.value)}/>
                    <Button black block
                            onClick={saveAddress}>
                      Save
                    </Button>
                    <hr/>
                  </>
                {/* )} */}
                {!session && (
                  <Button primary onClick={logout}>Logout</Button>
                )}
                {session && (
                  <Button primary onClick={() => router.push('register')}>Register</Button>
                )}<br/>
                <br/>
                
                {session && (
                  <Button primary onClick={() => router.push('/login')}>Login </Button>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapper>
      </Center>
      <Footer/>
    </>
  );
}



