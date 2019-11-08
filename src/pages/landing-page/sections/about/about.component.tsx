import React, { Component } from "react";
import "./about.component.scss";
interface Props {}
interface State {}

export default class AboutSection extends Component<any, State> {
  state = {};

  render() {
    return (
      <div className="about" id="about">
        <div className="text">
          <h2 className="heading">About Me</h2>
          <div className="info">
            <p>
              Hello! I'm Ebrahim, a software engineer based in Toronto, Canada
              who enjoys building things that help make people's live easier.</p>
              <p>
                I develop exceptional websites and web apps that provide
                intuitive, pixel-perfect user interfaces with efficient and
                modern backends. Shortly after graduating from University of
                Ontario IT, I joined the engineering team at Bank Of Montreal
                where I work on a wide variety of interesting and meaningful
                projects that touch millions of people.
            </p>
          </div>
        </div>

        <div className="infoaboutme">
            {/* TODO: Add DP and Some Graphic about your program languages you are efficient in */}
          </div>
      </div>
    );
  }
}
