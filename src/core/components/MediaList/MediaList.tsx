import React from 'react';
import './MediaList.scss';

const MediaList = ({ mediaListItems }: { mediaListItems: any[] }) => {
	return (
		<div className='media-list'>
			{mediaListItems
				? mediaListItems.map(({ link,  iconName, label }, index) => (
						<a
							key={index}
							target='_blank'
							rel='noopener noreferrer'
							className={'icon ' + iconName}
							href={link}>
							<span className='label'>{label}</span>
						</a>
				  ))
				: null}
		</div>
	);
};

export default MediaList;