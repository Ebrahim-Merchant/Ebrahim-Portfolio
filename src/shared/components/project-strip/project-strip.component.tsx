import * as React from 'react';
import './project-strip.component.scss';
import { ModalContext } from 'src/App';
import ProjectInfo from '../project-info/project-info';
import IslamifyPreview from 'src/assets/projects/islamify/thumbnail.png'
import ChatAppPreview from 'src/assets/projects/Chat-Application/basic-layout.png'
import MemePreview from 'src/assets/projects/Meme-generator/Bernie.png'


export const ProjectDescription = (props: any) => {
	const { title, description, showModal } = props;
	return (
		<div className='info'>
			<div className='heading'>{title}</div>
			<div className='description'>{description}</div>
			<div className='button' onClick={showModal}>
				More Info
			</div>

		</div>
	);
};

export const ProjectItem = (props: any) => {
	const { image, title, description, demoUrl, showModal } = props;
	return (
		<div className='project-item' style={{backgroundImage: `url(${image})`}}>
			<ProjectDescription
				title={title}
				description={description}
				demoUrl={demoUrl}
				showModal={showModal}></ProjectDescription>
		</div>
	);
};

const ProjectStrip = (props: any) => {
	const {setModalContent, setIsShowModal} = React.useContext(ModalContext);

	const modalData = (showModal: boolean, projectKey: string) => {
		setIsShowModal(showModal);
		setModalContent(
		<ProjectInfo
			projectKey = {projectKey}
		/>)
	}

	return (
		<div className='project-list'>
			<ProjectItem
				image={IslamifyPreview}
				demoUrl='#'
				title='Islamify'
				showModal={() => modalData(true, 'Islamify')}
				description='Get up-to date prayer times, compass and tasbeeh'></ProjectItem>
			<ProjectItem
				image={ChatAppPreview}
				demoUrl='#'
				showModal={() => modalData(true, 'Chat-Application')}
				title='Talk to me'
				description='Message friends and family and stay in touch when wherever you are'></ProjectItem>
			<ProjectItem
				image={MemePreview}
				showModal={() => modalData(true, 'Meme-generator')}
				demoUrl='#'
				title='Meme Generator'
				description='Create and share your funny memes with your friends and family'></ProjectItem>
		</div> 
	);
};

export default ProjectStrip;
