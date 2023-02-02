import { Router } from 'preact-router';

import { Header } from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Profile from './routes/profile';

import './style/index.css';

export default function App() {
    return (
        <div id="app">
            <Header />
			<main>
				<Router>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</main>
        </div>
    );
}
