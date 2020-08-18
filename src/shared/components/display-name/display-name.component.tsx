import React from 'react';
import './display-name.component.scss';
import { DisplayPage } from 'src/shared/models/display-page.props';

const DisplayName = (props: DisplayPage) => {
	const { name, mediaListItems } = props;
	return (
		<div className='display-name'>
			<p className='subtitle'>Hi, I'm</p>
			<h1 className='name'>{name}</h1>
			<p className='subtitle'>
				I'm a software engineer and front-end developer
			</p>
			<div className='media-list'>
				{mediaListItems ? mediaListItems.map((mediaElement, index) => (
					<a
						key={index}
						className={'icon ' + mediaElement.iconName}
						href={mediaElement.link}>
						<span className='label'>{mediaElement.label}</span>
					</a>
				)) : null}
			</div>
		</div>
	);
};

export default DisplayName;
