import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
   <div>
    <h1 className="text-center text-secondary">A Short Description Of Mine !!!!</h1>
     <div className="pink">
        <Container >
      
      <div className="mt-5 pt-5 mb-4">
        <Row>
          <Col sm={12} md={6} lg={4}>
            <img
              src={"./img/15.avif"}
              alt="14"
              className="img-fluid"
              style={{ width: "800px", height: "400px" }}
            />
          </Col>
          <Col sm={12} md={6} lg={8} className="px-5">
            <div>
              <h1 className="text-center text-secondary"> Hi, I’m Dena</h1>
              <p className="text-secondary text-center pt-3">
                A mental health blogger. <br />
                Passionate about sharing <br />
                thoughts and information on <br />
                everything that makes my days better.
              </p>
              <div className="pt-3">
              <p  className="text-secondary text-center">
                I'm a paragraph. Click here to add your own text and edit me. <br />
                It’s easy. Just click “Edit Text” or double click me to add your <br />
                own content and make changes to the font.  Feel free  to drag <br /> and
                drop me anywhere you like on your page.  I’m a great place for <br />
                you to tell a story and let your users know a little more about
                you.​
              </p>
              </div>
             
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    </div>
   </div>
  );
}

export default About;
