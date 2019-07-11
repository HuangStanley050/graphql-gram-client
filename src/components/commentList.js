import React, {useState} from "react";
import {Collapse, Button, CardBody, Card} from "reactstrap";
import {connect} from "react-redux";

const CommentList = props => {
  const [collapsed, setCollapsed] = useState(false);
  const showContent = e => {
    setCollapsed(!collapsed);
  };
  return (
    <section>
      <Button
        color="primary"
        onClick={showContent}
        style={{marginBottom: "1rem"}}
      >
        Toggle
      </Button>
      <Collapse isOpen={collapsed}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </section>
  );
};

export default CommentList;
