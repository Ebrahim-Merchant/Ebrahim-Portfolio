import React, { Component } from "react";
import "./display-name.component.scss";
import { DisplayPage } from "../../models/display-page.props";


interface State {}

/**
 * @props name - string,
 *        subtitle - string,
 *        mediaListItems - SocialMediaItems[]
 *
 * @export
 * @class DisplayName
 * @extends {Component<DisplayPage, State>}
 */
export default class DisplayName extends Component<DisplayPage, State> {
  state = {};

  render() {
    const { name, subtitle, mediaListItems } = this.props;
    return (
      <div className="display-name">
        <h1 className="name">{name}</h1>
        <p className="subtitle">{subtitle}</p>
          <ul className="media-list">
            {mediaListItems.map((mediaElement,index) => (
              <li key={index}>
                <a
                  className={'icon '+ mediaElement.iconName}
                  href={mediaElement.link}
                >
                <span className="label">{mediaElement.label}</span>
                </a>
              </li>
            ))}
          </ul>
      </div>
    );
  }
}
