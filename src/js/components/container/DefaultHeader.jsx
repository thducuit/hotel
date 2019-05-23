import React, { Component } from "react";
import  { Header, Nav, Search }  from 'K300';

class DefaultHeader extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
        <header>
            <Header></Header>
            <Nav></Nav>
            <Search></Search>
        </header>
    );
  }
}
export default DefaultHeader;