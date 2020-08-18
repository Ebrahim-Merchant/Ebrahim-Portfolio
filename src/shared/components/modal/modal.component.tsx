import React, { useEffect, useRef } from 'react';
import './modal.component.scss';
import ReactDOM from 'react-dom';

const modalRoot: any = document.getElementById('modal');

interface Props {
	heading?: string;
	close: any;
	children?: any;
}

function ModalParent(props: any) {
	const el = document.createElement('div');

	useEffect(() => {
		modalRoot.appendChild(el);
		return () => {
			modalRoot.removeChild(el);
		}
	}, [el]);

	return ReactDOM.createPortal(
		// Any valid React child: JSX, strings, arrays, etc.
		props.children,
		// A DOM element
		el
	);
}

const Modal = (props: Props) => {
	const { close, children } = props;
	const centerPageRef = useRef<any>(null);
	return (
		<ModalParent>
			<div className='modal' onClick={(e) => centerPageRef.current.contains(e.target) ? '' : close(false) }>
				<span className='close-modal-btn' onClick={() => close(false)}>
				 	<span className="btn-icon">x</span>
					 <span className="btn-text">Close</span>
				</span>
				<div
					className='modal-wrapper'
					ref={centerPageRef}
					style={{
						transform: 'translateY(0vh)',
						opacity: '1',
					}}>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</ModalParent>
	);
};

export default Modal;
