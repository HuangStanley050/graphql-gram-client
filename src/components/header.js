import React, {Component} from "react";
import Links from "../constants/navigationLinks";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    return (
      <section>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {Links.map(link => {
                return (
                  <NavItem key={link.text}>
                    <NavLink tag={Link} to={link.path}>
                      {link.text}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </section>
    );
  }
}

export default Header;
