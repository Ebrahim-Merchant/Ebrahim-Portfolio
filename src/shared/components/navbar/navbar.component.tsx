import * as React from 'react';
import "./navbar.component.scss";
import { NavBarItem } from 'src/shared/models/navbar.list';

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
  
  render() {
    const {listItem, isTransparent} = this.props;
    return (
      <ul className={this.getClass(isTransparent)}>
          {listItem.map((item, index) => (
              <li key={index}>
                  <a href={item.link}>{item.label}</a>
                  {/* <span className="label">
                      {item.label}
                  </span> */}
              </li>
          ))}
      </ul>
    );
  }
}
