import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import "../../styles/featured-tour-list.css";

const FeaturedTourList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4">
          <TourCard tour={tour} key={tour.id} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
