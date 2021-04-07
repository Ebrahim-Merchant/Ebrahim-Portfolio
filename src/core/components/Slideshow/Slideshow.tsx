import React, { useEffect, useState } from 'react';
import { useKeyPress } from 'src/core/hooks/useKeyPress';
import { BaseProps } from 'src/core/models/BaseProps';
import './Slideshow.scss';

interface SlideshowProps extends BaseProps {
	images: string[];
}

const Slideshow = ({ images, children }: SlideshowProps) => {
	const [currentImage, setCurrentImage] = useState('');
	const [currentSlide, setCurrentSlide] = useState(0);

	useKeyPress((event: KeyboardEvent) => {
		if(event.key === 'ArrowRight') {
			next();
		}

		if(event.key === 'ArrowLeft') {
			prev();
		}
	})

	useEffect(() => {
		setCurrentImage(images[currentSlide]);
	}, [images, currentSlide]);

	function next() {
		if (currentSlide < images.length - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	}

	function prev() {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		}
	}

	return (
		<div
			className='slideshow'
			style={{
				backgroundImage: `url(${currentImage}#${new Date().getTime()})`,
			}}>
			<div className='close'>{children}</div>
			<div className='control'>
				<div
					className={'item ' + (currentSlide === 0 ? 'disabled' : '')}
					onClick={() => prev()}>
					<img
						src='assets/left-arrow.svg'
						width='24px'
						height='24px'
						alt='left'></img>
				</div>
				<div
					className={
						'item ' + (currentSlide === images.length - 1 ? 'disabled' : '')
					}
					onClick={() => next()}>
					<img
						src='assets/right-arrow.svg'
						width='24px'
						height='24px'
						alt='right'></img>
				</div>
			</div>
		</div>
	);
};

export default Slideshow;
