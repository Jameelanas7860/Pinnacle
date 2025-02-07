import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Smile() {
  return (
    <Container>
        {/* always make me smile start */}
      <div className="mt-5 pt-5 sm-mb-2">
        <div className="text-center ">
          <h1 className="mb-5">Always Make Me Smile</h1>
          <div>
            <Row className="mb-3">
              <Col md={4} sm={6} xs={12} className="sm-mb-1 sm-m-2 md-m-2">
                <img
                  src={"./img/16.jpg"}
                  alt="16"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>

              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/18.jpg"}
                  alt="18"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/17.jpg"}
                  alt="17"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mb-3 sm-mb-2">
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/19.jpg"}
                  alt="19"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/24.jpg"}
                  alt="24"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/21.jpg"}
                  alt="21"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mb-3 sm-mb-2">
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/22.jpg"}
                  alt="22"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/20.jpg"}
                  alt="20"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/23.jpg"}
                  alt="23"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="">
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/25.jpg"}
                  alt="25"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/26.jpg"}
                  alt="26"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
              <Col md={4} sm={6} xs={12} className="sm-mb-1">
                <img
                  src={"./img/27.jpg"}
                  alt="27"
                  style={{ width: "300px", height: "250px" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* always make me smile end */}
      
    </Container>
  )
}

export default Smile
