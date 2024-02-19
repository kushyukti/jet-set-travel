import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slideToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          error asperiores repellendus voluptatibus? Nesciunt, fugit quo. Eos
          aspernatur temporibus adipisci modi, asperiores quam expedita amet
          eveniet, porro aut iure similique.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
          reiciendis delectus incidunt at vitae sapiente fugit maiores, modi
          culpa quo architecto, soluta velit veniam voluptatem totam blanditiis
          dignissimos. Magni, tempore. Dicta beatae in, explicabo recusandae
          repellendus dolorem pariatur.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Smith williams</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa
          at nemo amet deleniti repellat sapiente maxime? Quod eius quos ducimus
          veniam nulla molestiae labore exercitationem repellendus ullam totam!
          Rerum facere aliquid eligendi hic commodi doloribus veritatis officiis
          quas et perferendis voluptas excepturi delectus vel accusamus earum
          expedita nesciunt quasi, reprehenderit laudantium consequuntur cumque,
          dolorum nemo. Asperiores cumque eligendi accusamus numquam beatae quas
          perferendis iste nostrum non! Quae quasi temporibus placeat optio nam
          cum consectetur, maiores a laudantium beatae laboriosam!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Shakes Dupes</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          error asperiores repellendus voluptatibus? Nesciunt, fugit quo. Eos
          aspernatur temporibus adipisci modi, asperiores quam expedita amet
          eveniet, porro aut iure similique.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore
          hic quos cumque, voluptatibus illo qui amet facilis asperiores
          dignissimos?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Smith williams</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          facilis ipsam ipsa voluptates! Iure ea, culpa excepturi recusandae
          voluptates, quasi distinctio ipsam eos sed maiores cum hic aliquam
          repellendus. Aperiam animi quisquam laudantium numquam nostrum enim.
          Totam quam aliquid, voluptatibus nobis eligendi iure eveniet
          veritatis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2 " alt="" />
          <div>
            <h5 className="mb-0 mt-3">Shakes Dupes</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
