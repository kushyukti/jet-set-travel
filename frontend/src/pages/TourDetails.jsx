import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/tour-details.css";
import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  // const tour = tourData.find((tour) => tour.id === id);

  const {
    data: tour,
    loading,
    error,
  } = useFetch(`${BASE_URL}tour/getTour/${id}`);

  const { totalRating, avgRating } = calculateAvgRating(tour.reviews);
  const { user } = useContext(AuthContext);

  //format date
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}review/createReview/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.message);

      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {});
  return (
    <>
      <section>
        <Container>
          {loading && <Spinner />}
          {error && alert("Something went wrong!")}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  {/* ----------------tour imgae------------- */}
                  <img src={tour.photo} alt="" />

                  {/* ---------------tour info */}
                  <div className="tour__info">
                    <h2>{tour.title}</h2>
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-s-fill"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      {avgRating === 0 ? null : avgRating}
                      {
                        totalRating === 0 ? "Not Rated" : null
                        // <span>({reviews.length})</span>null
                      }
                    </span>

                    <span>
                      <i className="ri-map-pin-fill"></i>
                      {tour.address}
                    </span>
                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i>
                        {tour.city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i>
                        {tour.price}/per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i>
                        {tour.distance} km
                      </span>
                      <span>
                        <i className="ri-group-line"></i>
                        {tour.maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{tour.desc}</p>
                  </div>

                  {/* ================= tour reviews sectio-n===================*/}
                  <div className="tour__reviews mt-4">
                    <h4>
                      Reviews
                      <br />({tour.reviews?.length} reviews)
                    </h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {tour.reviews?.map((reviews, index) => (
                        <div className="review__item" key={index}>
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{reviews.username}</h5>
                                <p>
                                  {new Date(
                                    reviews.createdAt
                                  ).toLocaleDateString("en-IN", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {reviews.rating}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{reviews.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ================= tour reviews section end s===================*/}
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>

        <Newsletter />
      </section>
    </>
  );
};

export default TourDetails;
