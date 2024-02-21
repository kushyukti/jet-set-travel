import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../../src/shared/TourCard";
import tourData from "../assets/data/tours";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Col, Container, Row } from "reactstrap";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  console.log(pageCount, page, "dasf");

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <CommonSection title={"All Tours"} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-5" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            {/* <Col lg="12">
              <p>[pagination</p>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => {
                  console.log(number);
                  <span
                    key={number}
                    onClick={() => {
                      setPage(number);
                    }}
                    className={page === number ? "active__page" : ""}
                  >
                    <p>{number + 1}helo</p>
                  </span>;
                })}
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
