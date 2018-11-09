import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Exception404 from "./components/Exception404/Exception404";
import Welcome from "./components/Welcome/Welcome";

ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route path={'/'} exact component={Welcome}/>
				<Route path={'/news(/:newsId)'} component={News}/>
				<Route path={'*'} component={Exception404}/>
			</Switch>
		</App>
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
