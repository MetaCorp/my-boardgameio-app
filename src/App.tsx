import React from 'react'
import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
	const onClickTestServer = () => {
		fetch(`/api/greeting?name=${encodeURIComponent('Meta')}`)
			.then((response) => response.json())
			.then((state) => console.log(state))
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<button onClick={onClickTestServer}>test server</button>
			</header>
		</div>
	)
}

export default App
