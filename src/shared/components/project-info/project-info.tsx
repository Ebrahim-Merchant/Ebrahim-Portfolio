import React, { ReactElement, useState, useEffect } from 'react';
import './project-info.scss';
import Markdown from 'markdown-to-jsx';

interface Props {
	projectKey: string;
}

export default function ProjectInfo({
	projectKey
}: Props): ReactElement {
	const [projectMarkdown, setProjectMarkdown] = useState<string>('');
	useEffect(() => {
		const setProject = async () => {
			setProjectMarkdown(await getMarkdownFile(projectKey));
		};
		setProject();
	}, [projectKey]);
	return (
		<Markdown>{projectMarkdown}</Markdown>
	);
}

async function getMarkdownFile(filePath: string) {
	return await (await fetch(`/assets/projects/${filePath}/${filePath}.md`)).text();
}