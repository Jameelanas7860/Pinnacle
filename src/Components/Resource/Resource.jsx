import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

function Resource() {
  return (
    <section>
      <h2 className="text-secondary text-center mb-5">
        We Provide Best Resources Here !!!!!!!{" "}
      </h2>
      <Container>
        <div>
          <Row>
            <Col className="lightpink d-flex">
              <div>
                <p className="mx-5 mt-5 px-5 pt-5 fs-1 text-center">
                  Free Mental <br />
                  Health Resources <br />
                  & Information
                </p>
                <p className=" fs-5 text-center mb-3 mx-5  px-5 text-secondary ">
                  When Asking a Friend Is Just Not Enough
                </p>
                <p className="text-center text-secondary">
                  I'm a paragraph. Click here to add your own text and edit me. <br />
                  It’s easy. Just click “Edit Text” or double click me to add <br />
                  your own content and make changes to the font.
                </p>
              </div>
            </Col>

            <Col>
            <ListGroup >
              <div className="text-center mb-5">
                <h2 className="text-secondary">Websites</h2>
                  <ul >
                    <li className="list-unstyled text-danger">I’m an item. ​Click here to edit me.</li>
                    <li className="list-unstyled text-primary">I’m an item. ​Click here to edit me.</li>
                    <li className="list-unstyled text-warning">I’m an item. ​Click here to edit me.</li>
                  </ul>
              </div>
            </ListGroup>
            <ListGroup >
              <div className="text-center mb-5">
                <h2 className="text-secondary">Organizations</h2>
                <ul >
                    <li className="list-unstyled text-danger">I’m an item. ​Click here to edit me.</li>
                    <li className="list-unstyled text-primary">I’m an item. ​Click here to edit me.</li>
                    <li className="list-unstyled text-warning">I’m an item. ​Click here to edit me.</li>
                  </ul>
              </div>
            </ListGroup>
            <ListGroup >
              <div className="text-center mb-5">
                <h2 className="text-secondary">Books</h2>
                <ul >
                    <li className="list-unstyled text-danger">I’m an item. ​Click here to edit me.</li>
                    <li className="list-unstyled text-primary">I’m an item. ​Click here to edit me.</li>
                    <li className="list-unstyled text-warning">I’m an item. ​Click here to edit me.</li>
                  </ul>
              </div>
            </ListGroup>
                
            
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Resource;
