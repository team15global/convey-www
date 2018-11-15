import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

import Globals from './Globals'

const colors = {
  bg: '#fff',
  text: '#fff',
}

const Wrapper = styled.header`
  text-align: center;
  background-color: ${colors.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-family: Spicy Rice;
  font-size: 5rem;
  margin-top: -2rem;
`

const Input = styled(TextField)`
  width: 60%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${colors.bg} inset;
  }
`

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Title>Convey</Title>
          <Input
            label="Email Address"
            margin="normal"
            name="email"
            type="email"
            variant="outlined"
          />
        </Wrapper>
        <Globals />
      </Fragment>
    )
  }
}
