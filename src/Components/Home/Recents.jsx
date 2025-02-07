import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Recents() {
  return (
    <Container>
        {/* RECENT POST START */}
      <section>
       <h1 className="text-center mt-3 text-warning">Recent Posts</h1>
        <div className="mt-5 pt-5" data-aos="fade-up" data-aos-duration="2000">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <img
                src={"./img/2.jpg"}
                alt="14"
                className="img-fluid"
                style={{ width: "400px", height: "350px" }}
              />
            </Col>
            <Col sm={12} md={6} lg={8} className="px-5">
              <div>
                {" "}
                <span className="text-secondary">
                  {" "}
                  May 1, 2023 | 2 min read
                </span>
              </div>
              <div>
                <h3>The one thing I would tell to my 16 year old self.</h3>
                <p className="text-secondary">
                  {" "}
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading . I always get to where I’m going by walking away from
                  where I have been.....
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5 pt-5" data-aos="fade-up" data-aos-duration="2000">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <img
                src={"./img/3.jpg"}
                alt="14"
                className="img-fluid"
                style={{ width: "400px", height: "350px" }}
              />
            </Col>
            <Col sm={12} md={6} lg={8} className="px-5">
              <div>
                {" "}
                <span className="text-secondary">
                  {" "}
                  May 1, 2023 | 2 min read
                </span>
              </div>
              <div>
                <h3>The one thing I would tell to my 16 year old self.</h3>
                <p className="text-secondary">
                  {" "}
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading . I always get to where I’m going by walking away from
                  where I have been.....
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5 pt-5" data-aos="fade-up" data-aos-duration="2000">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <img
                src={"./img/4.jpg"}
                alt="14"
                className="img-fluid"
                style={{ width: "400px", height: "350px" }}
              />
            </Col>
            <Col sm={12} md={6} lg={8} className="px-5">
              <div>
                {" "}
                <span className="text-secondary">
                  {" "}
                  May 1, 2023 | 2 min read
                </span>
              </div>
              <div>
                <h3>The one thing I would tell to my 16 year old self.</h3>
                <p className="text-secondary">
                  {" "}
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading . I always get to where I’m going by walking away from
                  where I have been.....
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5 pt-5" data-aos="fade-up" data-aos-duration="2000">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <img
                src={"./img/5.jpg"}
                alt="14"
                className="img-fluid"
                style={{ width: "400px", height: "350px" }}
              />
            </Col>
            <Col sm={12} md={6} lg={8} className="px-5">
              <div>
                {" "}
                <span className="text-secondary">
                  {" "}
                  May 1, 2023 | 2 min read
                </span>
              </div>
              <div>
                <h3>The one thing I would tell to my 16 year old self.</h3>
                <p className="text-secondary">
                  {" "}
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading . I always get to where I’m going by walking away from
                  where I have been.....
                </p>
              </div>
            </Col>
          </Row>
        </div>
        </section>
       {/* RECENT POST END*/}
      
    </Container>
  )
}

export default Recents
