import { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal');

const ModalParent = (props: any) => {
	const element = document.createElement('div');

	useEffect(() => {
		modalRoot?.appendChild(element);
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
			modalRoot?.removeChild(element);
		};
	}, [element]);

	return ReactDOM.createPortal(
		// Any valid React child: JSX, strings, arrays, etc.
		props.children,
		// A DOM element
		element
	);
}

export default ModalParent
