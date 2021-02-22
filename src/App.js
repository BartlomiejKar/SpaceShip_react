import React from 'react';
import { theme } from "Views/ThemeProvider"
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Wrapper } from "./styles/Container.js";
import Spaceship from "./components/Spaceship/spaceship.js";
import Information from "./components/Information/Information";
import Modal from "./components/Modal/Modal"
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Spaceship />
        <Information />
        {/* <Modal /> */}
      </Wrapper>
    </ThemeProvider>
  )
}

export default App;
