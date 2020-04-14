import React from 'react'
import { Menu } from 'semantic-ui-react'
import AppContainer from '../Stores/AppContainer'
import Info from './Info'

const AppMenu = (props: any) => {
  const appContainer = AppContainer.useContainer()
  const { view, changeView } = appContainer

  const menuItems = ['home', 'notifications', 'settings', 'logout']

  return (
    <Menu borderless inverted {...props}>
      {
        menuItems.map((item, idx) => {
          return <Menu.Item
            key={idx}
            name={item}
            active={view === item}
            onClick={() => changeView(item)}
          />
        }
        )
      }
      <Info />
    </Menu>
  )
}

const Desktop = () => <AppMenu vertical />
const Mobile = () => <AppMenu fluid widths={4} />

export default { Desktop, Mobile }