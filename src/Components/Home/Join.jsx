import React from 'react'
import { Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Join() {
  return (
    <Container>
     {/* join the converation start */}
      <section className="mt-5 text-center">
        <div>
          <h1>Join The Conversation</h1>
          <h5 className="text-secondary">
            Get the content you need, just when you need it
          </h5>
        </div>
        <div className="mt-5  mb-5 pink text-success">
          <Row>
            <Col>
              <Form className="m-2">
                <FormLabel>First Name</FormLabel>
                <Form.Control type="text" placeholder="First name" />
              </Form>
            </Col>
            <Col>
              <Form className="m-2">
                <FormLabel>Last Name</FormLabel>
                <Form.Control type="text" placeholder="Last name" />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="m-2">
                <FormLabel>E-mail</FormLabel>
                <Form.Control type="email" placeholder="Email" />
              </Form>
            </Col>
            <Col>
              <Form className="m-2">
                <FormLabel>Password</FormLabel>
                <Form.Control
                  type="Password"
                  placeholder="Type your password"
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="m-2">
                <FormLabel>Mesaage</FormLabel>
                <Form.Control
                  as="textarea"
                  placeholder="Type Your Message Here !!!"
                />
              </Form>
            </Col>
          </Row>
          <div className="mt-3">
            <Link
              to={"/Not-found"}
              className=" btn btn-primary text-white px-sm-4 p-3 me-4 rounded text fw-bold"
            >
              Submit
            </Link>
            <Link
              to={"/Not-found"}
              className=" btn btn-danger text-white px-sm-4 p-3 me-4 rounded text  fw-bold"
            >
              Cancel
            </Link>
          </div>
        </div>
      </section>
      {/* join the converation end */}
    </Container>
  )
}

export default Join
