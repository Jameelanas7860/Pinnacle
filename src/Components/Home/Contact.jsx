import React from "react";
import { Col, Container, Form, FormGroup, FormLabel, ListGroup, Row, } from "react-bootstrap";

function Contact() {
  return (
    <section >
     <div className="mb-3">
     <h1 className="text-center text-danger">Contact Us 
     <span className="fs-5 mx-2 text-dark">Ask Me Anything ..</span>
     </h1> 
        </div>
      <Container>
        <Row className=" bg-secondary text-light mb-5 pt-5">
          <Col sm={12} md={6} lg={4}>
            <ListGroup >
              <ul className="mt-3 list-unstyled mx-5">
                <li className=" mt-2 fs-5 mb-2">Pinnacle-Times To Phtography ...</li>
                <li className="fs-5 mb-2">123-456-7890 ...</li>
                <li className="fs-5 mb-2">info@mysite.com ...</li>
                <li className="fs-5 mb-2">© 2035 by Pinnacle. <br />
                   Powered and secured by Wix.....</li>
              </ul>
            </ListGroup>
          </Col>
          <Col sm={12} md={6} lg={8}>
            <Form >
            <FormGroup className="mx-5 mt-3 ">
                <FormLabel>First name</FormLabel>
                <Form.Control type="text" placeholder="Enter Your First Name" />
            </FormGroup>
             <FormGroup  className="mx-5 mt-3 mb-2">
                <FormLabel>Last name</FormLabel>
                <Form.Control type="text" placeholder="Enter Your Last Name" />
            </FormGroup>
            <FormGroup className="mx-5">
                <FormLabel>E-mail</FormLabel>
                <Form.Control type="email" placeholder="Enter Your E-mail" />
            </FormGroup>
            <Form.Control as="textarea" placeholder="Type your message here !!!" 
             className="mt-3 mb-3 " />
          </Form>
          </Col>
          
 </Row>

      </Container>
    </section>
  );
}

export default Contact;
