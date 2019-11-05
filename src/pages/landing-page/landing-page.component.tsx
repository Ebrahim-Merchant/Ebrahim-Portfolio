import React, { Component } from "react";
import DisplayName from "../../shared/components/display-name/display-name.component";
import * as inputData from "../../conf.json";
import NavBar from "../../shared/components/navbar/navbar.component";
import "./landing-page.component.scss";
import ProjectStrip from "../../shared/components/project-strip/project-strip.component";

interface Props {}
interface State {
  isTransparent: boolean;
}

export default class LandingPage extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      isTransparent: true
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  handleScroll() {
    const position = document.documentElement.scrollTop;
    if (position !== 0) {
      this.setState({isTransparent: false});
    } else {
      this.setState({ isTransparent: true });
    }
  }
  render() {
    return (
      <div id="home" className="home">
        <div className="landing-page">
          <NavBar
            isTransparent={this.state.isTransparent}
            listItem={inputData.listItems}
          ></NavBar>
          <DisplayName
            className=""
            name={inputData.name}
            subtitle={inputData.subtitle}
            mediaListItems={inputData.mediaListItems}
          />
          {/* <ProjectStrip></ProjectStrip> */}
        </div>
        <div
          className="about"
          id="about"
          onScrollCapture={() => console.log("we here")}
        ></div>
      </div>
    );
  }
}
