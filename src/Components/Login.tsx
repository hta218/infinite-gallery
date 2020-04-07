import React, { useState } from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import AppContainer from '../Stores/AppContainer'

const Login = () => {
  const appCont = AppContainer.useContainer()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = () => {
    appCont.login(username, password, remember)
  }

  return (
    <StyledLogin>
      <Header as="h1" size="large">Login to view Gallery Modal</Header>
      <Segment inverted>
        <Form inverted onSubmit={handleSubmit}>
          <Form.Input
            fluid
            label='Username'
            placeholder='Username'
            name='username'
            value={username}
            onChange={(e, { value }) => { setUsername(value) }} />
          <Form.Input
            fluid
            label='Password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e, { value }) => { setPassword(value) }} />
          <Form.Checkbox 
            label='Remember me' 
            checked={remember} 
            onChange={(e, { checked }) => { setRemember(!!checked) }} />
          <Button type='submit'>Login</Button>
        </Form>
      </Segment>
      <Header as="h3">(Username: admin, password: admin)</Header>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .ui.segment {
    width: 300px;
  }

  button { float: right; }
  h3.ui.header {
    font-style: italic;
    color: #4686a5;
  }
`

export default Login