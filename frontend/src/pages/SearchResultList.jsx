import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
      <div>
        <CommonSection title={"Tour Search Result"} />
        <section>
          <Container>
            <Row>
              {data.length === 0 ? (
                <h4 className="text-center">No tour found</h4>
              ) : (
                data?.map((tour) => (
                  <Col lg="3" className="mb-4">
                    <TourCard tour={tour} />
                  </Col>
                ))
              )}
              <Col></Col>
            </Row>
          </Container>
        </section>
      </div>
      ;
    </>
  );
};

export default SearchResultList;
