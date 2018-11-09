import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Exception404 from "./components/Exception404/Exception404";
import Welcome from "./components/Welcome/Welcome";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import Reducer from "./reducers/Reducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(Reducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path='/' exact component={Welcome}/>
					<Route path='/news' component={News}/>
					<Route path='/news/:newsId' component={NewsDetail}/>
					<Route path='*' component={Exception404}/>
				</Switch>
			</App>
		</Router>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
