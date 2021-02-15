import React from 'react';
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Wrapper } from "./styles/Container.js";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>hello world</h1>
      </Wrapper>
    </>
  )
}

export default App;
