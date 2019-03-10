import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function NoNoteFallback() : JSX.Element {
  return (
    <Wrapper>No note selected</Wrapper>
  );
}

export default NoNoteFallback;
