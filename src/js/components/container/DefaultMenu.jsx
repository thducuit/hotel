import React, { PureComponent } from "react";
import  { Menu, MenuItem, MenuDropdown, Icon }  from 'K300';
import { Link } from "react-router-dom";

class DefaultMenuDropdown extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <MenuDropdown text={ this.props.text } onClick={ this.toggle.bind(this) } open={ this.state.isOpen }>
                <Menu>
                    {
                        this.props.routes.map((route, idx) => {
                            return <MenuItem><Link key={idx} to={route.path}><Icon icon={route.icon} />{route.name}</Link></MenuItem>;
                        })
                    }
                </Menu>
            </MenuDropdown>
        );
    }
}

class DefaultMenu extends PureComponent {

    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <Menu>
                {
                    this.props.routes.map((route, idx) => {
                        if(route.children) {
                            return <DefaultMenuDropdown text={route.name} routes={route.children} />;
                        }
                        return <MenuItem><Link key={idx} to={route.path}><Icon icon={route.icon} />{route.name}</Link></MenuItem>;
                    })
                }
            </Menu>
        );
    }
}

export default DefaultMenu;