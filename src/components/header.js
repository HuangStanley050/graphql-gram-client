import React, {Component} from "react";
import Links from "../constants/navigationLinks";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/authActions";
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
    }
  };

  render() {
    return (
      <section>
        <Navbar style={{backgroundColor: "#528feb"}} expand="md">
          <NavbarBrand tag={Link} to="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {Links.map(link => {
                let loginLink;
                let logoutLink;
                if (link.text === "Login" || link.text === "Register") {
                  logoutLink = (
                    <NavItem key={link.text}>
                      <NavLink tag={Link} to={link.path}>
                        {link.text}
                      </NavLink>
                    </NavItem>
                  );
                } else {
                  loginLink = (
                    <NavItem key={link.text}>
                      <NavLink
                        onClick={this.logoutHandler}
                        tag={Link}
                        to={link.path}
                      >
                        {link.text}
                      </NavLink>
                    </NavItem>
                  );
                }
                if (this.props.isAuth) {
                  return loginLink;
                } else {
                  return logoutLink;
                }
              })}
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
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
