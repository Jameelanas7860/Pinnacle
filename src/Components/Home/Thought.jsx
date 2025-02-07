import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Thought() {
  return (
    <Container>
        {/* MY THOUGHT START */}
      <section>
        <div data-aos="flip-up" data-aos-duration="2000">
          <Row>
            <Col sm={12} md={6} lg={8}>
              <img
                src={"./img/14.jpg"}
                alt="14"
                className="img-fluid"
                style={{ width: "600px", height: "400px" }}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="pb-3 text-center ">
                {" "}
                <h2>My Thoughts </h2>
              </div>
              <img
                src={"./img/img2.webp"}
                alt="14"
                className="img-fluid"
                style={{ width: "600px", height: "400px" }}
              />
              <div>
                <h3 className="text-danger mt-5 fw-500 ">
                  Detoxing my social media feednpm 
                </h3>
                <h5 className="text-primary fw-300 ">
                  Create a blog post subtitle that summarizes your post in a few
                  short, <br />
                  punchy sentences and entices your audience to continue
                  reading...{" "}
                </h5>
                <div>
                  <Link
                    to={"/Not-found"}
                    className=" btn btn-danger text-white px-sm-4 p-3 me-4 rounded text  fw-bold"
                  >
                    All Posts
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          </div>
          </section>
          {/* MY THOUGHT END */}

    </Container>
      

  )
}

export default Thought
