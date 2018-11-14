import React from 'react'
import styled, { keyframes } from 'styled-components'

import logo from './logo.svg'

const spin = keyframes`
	from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
`

export default () => <Logo alt="logo" className="App-logo" src={logo} />
