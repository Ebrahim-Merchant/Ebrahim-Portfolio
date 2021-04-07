import './LandingPage';
import React from 'react';
import * as inputData from 'src/assets/conf.json';
import Sidenav from 'src/core/components/Sidenav';
import ProjectItem from 'src/core/components/ProjectItem';
import IslamifyPreview from 'src/assets/images/uni_background.jpg';
import DisplayName from 'src/core/components/DisplayName';
import MediaList from 'src/core/components/MediaList';

const LandingPage = () => {
	const mediaListItems = inputData.mediaListItems;
	return (
		<div>
			<Sidenav>
				<DisplayName>
					Hi, I'm <b> Ebrahim Merchant</b> a Software Engineer and Front-end
					Developer
				</DisplayName>
				<MediaList mediaListItems={mediaListItems}></MediaList>
			</Sidenav>
			<div className='main'>
				<section id='intro'>
					<h1>How are you?</h1>
					<p> i am ebrahim here </p>
				</section>
				<section>
					<h1>Recent Works</h1>
					<div className='container'>
						{inputData.projects.map((projectItem) => (
							<ProjectItem
								projectKey='Islamify'
								image={IslamifyPreview}
								title={projectItem.title}
								description={projectItem.description}></ProjectItem>
						))}

						{/* <ProjectItem
							projectKey='Chat-Application'
							image={IslamifyPreview}
							title='Chat'
							description='Chat application'></ProjectItem>
						<ProjectItem
							projectKey='Islamify'
							image={IslamifyPreview}
							title='Chat'
							description='Chat application'></ProjectItem>
						<ProjectItem
							projectKey='Islamify'
							image={IslamifyPreview}
							title='Chat'
							description='Chat application'></ProjectItem> */}
					</div>
				</section>
			</div>
		</div>
	);
};

export default LandingPage;
