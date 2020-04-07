import React from 'react';
import { isAndroid, isBrowser, isIOS } from 'react-device-detect';
import styled, { css } from 'styled-components';
import './App.css';
import Home from './Components/Home';
import AppContainer from './Stores/AppContainer';

function App() {
  const { auth, view } = AppContainer.useContainer()

  if (!auth) {
    window.location.href = '/login'
  } else {
    return (
      <StyledApp>
        <Home view={view}/>
      </StyledApp>
    )      
  }
}

const desktopCSS = css`
  display: flex;
  flex-direction: row;
  & > .ui.container {
    padding: 16px;
    margin-left: 15rem !important;
  }
  
  > .ui.menu {
    position: fixed;
    height: 100vh;
  }
`

const androidCSS = css`
  > .ui.menu {
    position: fixed;
    z-index: 100;
  }

  > .ui.container {
    padding-top: 4rem;
  }
`

const iOSCSS = css`
  > .ui.menu {
    position: fixed;
    bottom: 0;
    z-index: 100;
  }

  > .ui.container {
    padding-top: 1rem;
  }
`

const StyledApp = styled.div`
  ${ isBrowser && desktopCSS}
  ${ isAndroid && androidCSS}
  ${ isIOS && iOSCSS}
`
export default App;
