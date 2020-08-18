import React, { ReactElement } from 'react';
import './about.component.scss';
interface Props {
	children: any;
}

export default function AboutSection({ children }: Props): ReactElement {
	return (
		<div className='about' id='about'>
			<div className='text'>
				<div className='info'>
					<p>
						Hello! I'm Ebrahim, a software engineer based in Toronto, Canada who
						enjoys building things that help make people's live easier.
					</p>
					<p>
						I develop exceptional websites and web apps that provide intuitive,
						pixel-perfect user interfaces with efficient and modern back-ends.
						Shortly after graduating from University of Ontario IT, I joined the
						engineering team at Bank Of Montreal where I work on a wide variety
						of interesting and meaningful projects that touch millions of
						people.
					</p>
				</div>
			</div>
			{children}
		</div>
	);
}
