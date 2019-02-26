import React, { Component } from 'react';
import {
    Navbar,NavbarBrand,Nav,NavItem,NavLink
} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Impp</NavbarBrand>
              <Nav className="ml-auto">
                <NavItem>
                  <NavLink href="#/login">Login</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>
        );
    }
}

export default Header;