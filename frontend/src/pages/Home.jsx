import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedTourList from "../components/featured_list/FeaturedTourList";

const Home = () => {
  const video = document.getElementById("video");
  const videoContainer = document.getElementById("video-container");

  // this code is for on hover video gets played
  // videoContainer.addEventListener("mouseenter", function () {
  //   video.play();
  //   this.classList.add("video-playing");
  // });

  // videoContainer.addEventListener("mouseleave", function () {
  //   video.pause();
  //   this.classList.remove("video-playing");
  // });

  return (
    <>
      {/*--------------------------- hero section start ---------------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  voluptate tempore sapiente eum magni laboriosam rem ullam modi
                  libero, iusto dolores enim facere quasi quibusdam
                  necessitatibus, accusantium odio ex molestiae?
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alg="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box  mt-4" id="video-container">
                <video src={heroVideo} alg="" id="video" muted loop autoPlay />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box  mt-5">
                <img src={heroImg2} alg="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* -----------------------------------hero section ends */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve?</h5>
              <h2 className="services__title">we offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =====================================featured tour section start */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* =====================================featured tour section end */}

      {/* =========================experience section start ================ = */}
      {/* =========================experience section end ============= */}
    </>
  );
};

export default Home;
