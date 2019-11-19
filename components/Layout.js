import React from 'react';
import styled from 'styled-components';

const Styles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Layout = ({ children }) => {
  return <Styles>{children}</Styles>;
};

export default Layout;
