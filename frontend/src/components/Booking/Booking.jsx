import React, { useContext, useState } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import "./booking.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const { price, title } = tour;

  const [booking, setBooking] = useState({
    userId: user && user.user,
    userEmail: user && user.email,
    tourName: title,
    fullname: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  /// send dtat to the server
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please Sign In!");
      }

      const res = await fetch(`${BASE_URL}booking/createBooking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between ">
        <h3>
          ${price}
          <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-s-fill" />
          {avgRating === 0 ? null : avgRating}
        </span>
      </div>

      {/* ==============================booking form================= */}

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-item-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ==============================booking form end================= */}

      {/* ==============================booking button================ */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>$10</span>
          </ListGroupItem>
          <ListGroupItem className="total border-0 px-0">
            <h5>Total</h5>
            <span>${totalAmount.toFixed(2)}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn  w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
