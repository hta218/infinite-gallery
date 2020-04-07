import React from 'react'
import { isBrowser, isMobile, isTablet } from 'react-device-detect'
import { Container, Header } from 'semantic-ui-react'
import Menu from '../Components/Menu'
import Gallery from './Gallery'

const Home = ({ view }: { view: string }) => {
  const header = isBrowser ? 'h1' : 'h2'

  let cols = 5
  if (isMobile) { cols = 1 }
  if (isTablet) { cols = 2 }

  return (
    <>
      {isBrowser && <Menu.Desktop />}
      {isMobile && <Menu.Mobile />}

      {
        view === 'home' && <Container>
          <Header as={header} textAlign="center">Gallery Modal</Header>
          <Gallery cols={cols} />
        </Container>
      }
      {view === 'notifications' && <Container>Notifications</Container>}
      {view === 'settings' && <Container>Settings</Container>}
    </>
  )
}

export default Home