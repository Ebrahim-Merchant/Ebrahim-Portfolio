import React from 'react';

export default function DisplayName({ children }: any) {
	return (
		<div className='display-name'>
			<img
				alt=''
				src='https://media-exp1.licdn.com/dms/image/C4E03AQGlXwjTimM1lA/profile-displayphoto-shrink_400_400/0/1604717900369?e=1614211200&v=beta&t=i_yOllaIcByhzXV_xMI6WvbCCrmlDFw9SM0xh1uOPSY'
				className='image'></img>
			<p className='subtitle'>{children}</p>
		</div>
	);
}
