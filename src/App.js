import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

const Title = styled.p`
  font-family: Spicy Rice;
`

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Title>
						Convey
					</Title>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		)
	}
}

export default App
