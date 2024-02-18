import React from "react";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import customizationImg from "../assets/images/customization.png";
import guideImg from "../assets/images/guide.png";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const ServicesList = () => {
  return (
    <>
      {servicesData &&
        servicesData.map((item, index) => {
          return (
            <Col lg="2">
              <ServicesCard item={item} key={index} />
            </Col>
          );
        })}
    </>
  );
};

export default ServicesList;
