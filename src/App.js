import React from 'react';
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Wrapper } from "./styles/Container.js";
import Spaceship from "./components/Spaceship/spaceship.js";
import Information from "./components/Information/Information";
import Modal from "./components/Modal/Modal"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Spaceship />
        <Information />
        <Modal />
      </Wrapper>
    </>
  )
}

export default App;
