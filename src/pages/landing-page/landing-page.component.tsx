import React, { Component } from "react";
import DisplayName from "../../shared/components/display-name/display-name.component";
import * as inputData from "../../conf.json";
import NavBar from "../../shared/components/navbar/navbar.component";
import "./landing-page.component.scss";
import "./stars.scss";
import ProjectStrip from "../../shared/components/project-strip/project-strip.component";
import AboutSection from "./sections/about/about.component";

interface Props {}
interface State {
  isTransparent: boolean;
}

export default class LandingPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleAnimateToRef = this.handleAnimateToRef.bind(this);
    this.state = {
      isTransparent: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  handleScroll() {
    const position = document.documentElement.scrollTop;

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 80
    ) {
      this.setState({ isTransparent: false });
    } else {
      this.setState({ isTransparent: true });
    }
  }

  handleAnimateToRef(event: any) {}

  render() {
    return (
      <div id="home" className="home container-stars">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        <div className="landing-page">
        <div className="sun"></div>
        <div className="light"></div>
          <DisplayName
            isTransparent={this.state.isTransparent}
            info={inputData.info}
            name={inputData.name}
            subtitle={inputData.subtitle}
            mediaListItems={inputData.mediaListItems}
          />

          
        </div>
      </div>
    );
  }
}
