import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

import Globals from './Globals'
import bgImage from '../../res/bg.jpg'

const colors = {
  bg: '#fff',
  text: '#fff',
}

const Wrapper = styled.header`
  text-align: center;
  width: 100%;
  background-color: rgba(236, 240, 241, 0.85);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BG = styled.img`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: auto;

  @media (max-width: 950px) {
    width: auto;
    height: 100%;
  }
`

const Title = styled.h1`
  font-family: Spicy Rice;
  font-size: 5rem;
  margin-top: -5rem;
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
        <BG src={bgImage} />
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
