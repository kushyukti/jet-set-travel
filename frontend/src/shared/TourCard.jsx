import React from "react";
import "./tour-card.css";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculatedAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { id, title, photo, city, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculatedAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center">
              <i className="ri-map-pin-line" />
              {city}
            </span>
            <span className="tour__location d-flex align-items-center">
              <i className="ri-star-fill" />
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price}
              <span>/per/person</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
