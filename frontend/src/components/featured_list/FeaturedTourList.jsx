import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import "../../styles/featured-tour-list.css";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}tour/getFeaturedTour`);

  // console.log(featuredTours);
  return (
    <>
      {loading && (
        <>
          <div class="spinner-border text-danger" role="status"></div>
        </>
      )}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour, index) => (
          <Col lg="3" className="mb-4">
            <TourCard tour={tour} key={index} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
