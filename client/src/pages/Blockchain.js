import React, { useState, useEffect } from "react";
import axios from "axios";
// import Slider from "react-slick";
// import FsLightbox from "fslightbox-react";
// import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import {Link} from 'react-router-dom'
// import Testimonial from "../components/Testimonial";

function Seo() {
  // const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  // const [reviews, setReviews] = useState([]);

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   pauseOnHover: true,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const handleToggler = (event) => {
  //   setToggler({
  //     toggler: !toggler,
  //   });
  // };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    // axios.get("/api/reviews").then((response) => {
    //   setReviews(response.data);
    // });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Blockchain" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-Kakucoin">
                <img
                  src={information.aboutImage}
                  alt="about"
                  // onClick={() => handleToggler(!toggler)}
                />
                {/* <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span> */}
                {/* <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  <span className="color-theme">Kakucoin</span>
                </h3>
                <p>
                  Sertic is bezig met de ontwikkeling van een nieuwe blockchain genaamd Kakucoin.
                  <br/>
                  De website voor Kakucoin gaat spoedig de lucht in, we verwachten eind maart.
                  Onze whitepaper zal eerder beschikbaar zijn dan de website zelf. 
                  <br/>
                  U kan de whitepaper voorafgaand opvragen via het contactformulier op deze website.
                </p>
                <Link
                  rel="noopener noreferrer"
                  to="/contact"
                  className="mi-button"
                >
                  Contactformulier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="What We do" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <br />
      {/* <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default Seo;
