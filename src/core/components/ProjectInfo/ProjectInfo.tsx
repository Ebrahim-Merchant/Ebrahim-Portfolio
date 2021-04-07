import React, { ReactElement, useState, useEffect } from 'react';
import './ProjectInfo.scss';
import Markdown from 'markdown-to-jsx';
import Slideshow from '../Slideshow';

interface Props {
	projectKey: string;
}

export default function ProjectInfo({ projectKey }: Props): ReactElement {
	const [projectMarkdown, setProjectMarkdown] = useState<string>('');
	const [projectInfo, setProjectInfo] = useState<ReactElement>(<span></span>);
	useEffect(() => {
		const setProject = async () => {
			setProjectInfo(getProjectInfo(await getJsonFile(projectKey)));
			// setProjectMarkdown(await getMarkdownFile(projectKey));
		};
		setProject();
	}, [projectKey]);

	return projectMarkdown ? <Markdown>{projectMarkdown}</Markdown> : projectInfo;
}

async function getMarkdownFile(filePath: string) {
	return await (
		await fetch(`/assets/projects/${filePath}/${filePath}.md`)
	).text();
}

async function getJsonFile(filePath: string) {
	return await (
		await fetch(`/assets/projects/${filePath}/${filePath}.json`)
	).json();
}

function getProjectInfo(projectJson: any) {
	console.log(projectJson);
	return (
		<div style={{textAlign: 'left'}}>
			<Slideshow images={projectJson?.slideshow}></Slideshow>
			<section id='intro'>
				<h1>{projectJson.intro.title}</h1>
				<p>{projectJson.intro.description}</p>
			</section>
			<section id='feature'>
				<h1>{projectJson.features.title}</h1>
				<ul>
					{projectJson.features.list.map((featureItem: string, i: number) => (
						<li key={i}>{featureItem}</li>
					))}
				</ul>
			</section>
			<section id='stack'>
				<h1>Stack</h1>
				{projectJson.stack.map((stackItem: { item: string }, i: number) => (
					<span key={i} className='stack-item'>
						{stackItem.item}
					</span>
				))}
			</section>
			<section className="demo-container">
				<h1>CTA</h1>
				{Object.keys(projectJson.cta).map((key: string, i: number) => (
					<a className={key} href={projectJson.cta[key]}>{key}</a>
				))}
			</section>
		</div>
	);
}
