import React, { Component } from "react";
//import Links from "../constants/navigationLinks";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, clear_data } from "../store/actions/authActions";

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
  logoutHandler = () => {
    if (window.confirm("Are you logging out?")) {
      this.props.logout();
      this.props.clear();
      this.props.history.push("/logout");
    }
  };

  render() {
    const LogoutLinks = () => (
      <>
        <NavItem>
          <NavLink to="/login" tag={Link}>
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register" tag={Link}>
            Register
          </NavLink>
        </NavItem>
      </>
    );
    const LoginLinks = () => (
      <>
        <NavItem>
          <NavLink to="/personal" tag={Link}>
            Personal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.logoutHandler} tag={Link} to="#">
            Logout
          </NavLink>
        </NavItem>
      </>
    );

    return (
      <section>
        <Navbar style={{ backgroundColor: "#528feb" }} expand="md">
          <NavbarBrand tag={Link} to="/">
            GraphQLGram
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.isAuth ? <LoginLinks /> : <LogoutLinks />}
            </Nav>
          </Collapse>
        </Navbar>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clear: () => dispatch(clear_data())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
