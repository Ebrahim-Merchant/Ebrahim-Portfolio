import React, { useRef } from 'react';
import { useKeyPress } from 'src/core/hooks/useKeyPress';
import './Modal.scss';
import ModalParent from './ModalParent';

interface Props {
	heading?: string;
	close?: any;
	children?: any;
	showModal: boolean;
}

const Modal = (props: Props) => {
	const { close, children, showModal } = props;
	const centerPageRef = useRef<any>(null);

		const handleKeyPress = (event: KeyboardEvent) => {
			if(event.code === 'Escape') {
				close(false);
			}
		}

  useKeyPress(handleKeyPress);
	
	return showModal ? (
		<ModalParent onKeyDown={handleKeyPress}>
			<div
				className='modal'
				onScroll={(e) => e.preventDefault()}
				onClick={(e) =>
					centerPageRef.current.contains(e.target) ? '' : close(false)
				}>
				<div className='modal-wrapper' ref={centerPageRef}>
					<span className='close-modal-btn' onClick={() => close(false)}>
						<span className='btn-icon'>x</span>
						<span className='btn-text'>Close</span>
					</span>

					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</ModalParent>
	) : null;
};

export default Modal;
