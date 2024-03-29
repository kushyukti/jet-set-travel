import React from "react";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your mail" />

                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                illum, molestias asperiores voluptatibus facilis odio aliquam
                quidem, consequatur deserunt qui perspiciatis! Quia ipsum
                eligendi libero, adipisci velit, soluta est quae doloremque
                doloribus quo maiores quisquam dolore ex tempore possimus.
                Facilis?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
