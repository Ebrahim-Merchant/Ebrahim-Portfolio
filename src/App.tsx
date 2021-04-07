import React, { createContext } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page';

export const ModalContext = createContext<any>({});

const App: React.FC = () => {
	return (
		<Router>
			<Route path='/' component={LandingPage} />
		</Router>
	);
};

export default App;
