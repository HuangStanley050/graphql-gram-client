import React from "react";
import {Navbar} from "reactstrap";

const Footer = () => {
  return (
    <section style={{marginTop: "auto"}}>
      <Navbar color="dark" light>
        <div style={{display: "block", width: "200px"}} className="mx-auto">
          <h1>Footer</h1>
        </div>
      </Navbar>
    </section>
  );
};

export default Footer;
