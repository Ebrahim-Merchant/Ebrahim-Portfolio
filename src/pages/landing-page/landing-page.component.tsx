import React, { Component } from "react";
import DisplayName from "../../shared/components/display-name/display-name.component";
import * as inputData from "../../conf.json";

interface Props {}
interface State {}

export default class LandingPage extends Component<Props, State> {
  render() {
    return (
      <div className="landing-page">
        <DisplayName
          name={inputData.name}
          subtitle={inputData.subtitle}
          mediaListItems={inputData.mediaListItems}
        />
      </div>
    );
  }
}
