import * as React from 'react';
import { NavBarItem } from './../../models/navbar.list';
import "./navbar.component.scss";

export interface INavBarProps {
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
        return "nav-heading"
    } else {
        return "nav-heading colored"
    }
  }
  public render() {
    const {listItem, isTransparent} = this.props;
    return (
      <ul className={this.getClass(isTransparent)}>
          {listItem.map((item, index) => (
              <li key={index}>
                  <a href={item.link} onClick={()=>{}}>{item.label}</a>
                  <span className="label">
                      {item.label}
                  </span>
              </li>
          ))}
      </ul>
    );
  }
}
