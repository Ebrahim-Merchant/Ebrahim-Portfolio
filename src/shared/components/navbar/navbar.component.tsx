import * as React from 'react';
import { NavBarItem } from './../../models/navbar.list';
import "./navbar.component.scss";

export interface INavBarProps {
  className?: string;
    handleClick?: CallableFunction;
    listItem: NavBarItem[];
    isTransparent: boolean;
}

export interface INavBarState {
}

export default class NavBar extends React.Component<INavBarProps, INavBarState> {
  constructor(props: INavBarProps) {
    super(props);

    this.state = {
    }
  }

  getClass(isTransparent: boolean): string{
    if(isTransparent){
        return "nav-heading bottom"
    } else {
        return "nav-heading colored top"
    }
  }

  handleClick(event: any){
    console.log(event.screenX);
    console.log(event.screenY);

  }
  render() {
    const {handleClick, listItem, isTransparent} = this.props;
    return (
      <ul className={this.getClass(isTransparent)}>
          {listItem.map((item, index) => (
              <li key={index}>
                  <a href={item.link} onClick={(event) => {this.handleClick(event)}}>{item.label}</a>
                  {/* <span className="label">
                      {item.label}
                  </span> */}
              </li>
          ))}
      </ul>
    );
  }
}
