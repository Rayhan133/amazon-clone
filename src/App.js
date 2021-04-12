import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
	'pk_test_51Ie9c0A7IMYJPWgLMy4vCi33JT52eHiiWurxYnog0Twb1qNC7wWxx06kBil5MvWdUhAHXqeJPiGQODnDyCjDnpEG00eQmPrQUs'
);

function App() {
	const [{}, dispatch] = useStateValue();

	const loading = () => {
		window.location.reload();
	};

	useEffect(() => {
		//will only run once when the app component loads

		auth.onAuthStateChanged((authUser) => {
			//	console.log('The user is ', authUser);

			if (authUser) {
				// User is signed in.

				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// User is signed out.
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router onload={loading}>
			<div className="App">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/login">
						<Header />
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
