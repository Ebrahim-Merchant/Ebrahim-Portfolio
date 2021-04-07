import React, { useState } from 'react';
import Modal from '../Modal';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import './ProjectItem.scss';

const ProjectItem = ({ projectKey, image, title, description }: any) => {

	const [modal, setShowModal] = useState<boolean>(false);
	
	return (
		<div className='project-item'>
			<div className='container'>
				<img src={image} alt="" className='project-image' />
				<div className="info" onClick={() => setShowModal(true)}>
					<div className="heading">Hello</div>
				</div>
			</div>
		
			<Modal showModal={modal} close={() => setShowModal(false)}>
				<ProjectInfo projectKey={projectKey}></ProjectInfo>
			</Modal>

			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ProjectItem;
