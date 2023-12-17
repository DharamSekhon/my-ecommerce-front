// // components/Footer.js
// import React from 'react';
// import styled from 'styled-components';

// const Foot = styled.p`
//   background-color: #07393C;
// `;

// const Footer = () => {
//   return (
//     <footer>
//       {/* Add your footer content here */}
//       <p>&copy; 2023 Your Company</p>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const MainContent = styled.div`
  flex: 1;
  /* Add your main content styling here */
`;

const Footer = styled.footer`
  background-color: #07393C;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const YourPageComponent = () => {
  return (
    <PageContainer>
      
      <Footer>
        For any support and assistance 
        write us at Ecommerceweb@gmail.com
      </Footer>
    </PageContainer>
  );
};

export default YourPageComponent;
