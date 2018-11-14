import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Globals from './Globals'

const Wrapper = styled.header`
	text-align: center;
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`

const Title = styled.p`
	font-family: Spicy Rice;
	font-size: 64px;
`

const Link = styled.a`
	color: #61dafb;
`

export default () => (
	<React.Fragment>
		<Wrapper>
			<Logo />
			<Title>Convey</Title>
			<Link
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</Link>
		</Wrapper>
		<Globals />
	</React.Fragment>
)
