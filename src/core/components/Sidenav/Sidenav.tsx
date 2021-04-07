import React from 'react';
import { BaseProps } from 'src/core/models/BaseProps';
import './Sidenav.scss';

const Sidenav = ({ children }: BaseProps) => {	
	return (
		<div className='sidenav'>
			{children}

		</div>
	);
};

export default Sidenav;
