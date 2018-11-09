import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.scss';
import Nav from "../Nav/Nav";

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app__header">
					<div className="app__container">
						<div className="app__row">
							<div className="app__logo">

								<img src={logo} className="app__logo-img" alt="logo"/>
							</div>
							<div className={'app__title'}>List news</div>
						</div>
						<div className="app__nav">
							<Nav/>
						</div>
					</div>
				</header>

				<main className={'app__main'}>
					{this.props.children}
				</main>

				<footer className={'app__footer'}>
					<div className="app__container">
						<div className="app__row">
							task for test
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
