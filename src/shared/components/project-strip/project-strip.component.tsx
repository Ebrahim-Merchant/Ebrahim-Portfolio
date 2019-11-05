import * as React from 'react';
import './project-strip.component.scss'

export interface IProjectStripProps {
}

export interface IProjectStripState {
}

export default class ProjectStrip extends React.Component<IProjectStripProps, IProjectStripState> {
  constructor(props: IProjectStripProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <ul className="project-list">
          <li className="project-item">poo</li>
          <li className="project-item">oipi</li>
          <li className="project-item">kjkj</li>
      </ul>
    );
  }
}
