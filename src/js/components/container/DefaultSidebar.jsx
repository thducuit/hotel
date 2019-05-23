import React, { PureComponent } from "react";
import  { Sidebar }  from 'K300';

class DefaultSidebar extends PureComponent {

  render() {
    const { children } = this.props;
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
  }
}
export default DefaultSidebar;