import React, { createContext, useState, ReactElement } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Modal from './shared/components/modal/modal.component';
import LandingPage from './pages/landing-page/landing-page';

export const ModalContext = createContext<any>({});

const App: React.FC = () => {
	const [showModal, setIsShowModal] = useState(false);
	const [modalContent, setModalContent] = useState<ReactElement>();
	return (
		<ModalContext.Provider value={{ setIsShowModal, setModalContent}}>
			<Router>
				<Route path='/' component={LandingPage} />
			</Router>
		 {showModal ? <Modal close={setIsShowModal}>{modalContent}</Modal> : <span></span>}
		</ModalContext.Provider>
	);
};

export default App;
