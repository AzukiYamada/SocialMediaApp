import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <h1>Gmail</h1>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: orange;
`;