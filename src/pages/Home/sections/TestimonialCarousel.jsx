import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContext } from "../../../contexts/auth/AuthContext";

const testimonials = [
  {
    name: "Sarah Ali",
    title: "An amazing place to build skills and grow fast",
    image:
      "https://res.cloudinary.com/dyzszn177/image/upload/v1750002802/sarah-ali_uyc5dr.jpg",
    message:
      "EduCore has completely transformed the way I learn. The flexibility and expert content helped me balance study with work.",
  },
  {
    name: "Mehedi Hasan",
    title: "Best learning platform I’ve used in my life",
    image:
      "https://res.cloudinary.com/dyzszn177/image/upload/v1750002802/mehedi-hasan_zmqvjw.jpg",
    message:
      "After enrolling in EduCore, I got hands-on experience with real-world projects. It helped me land my first developer job!",
  },
  {
    name: "Nusrat Jahan",
    title: "Transformative courses that helped me get hired quickly",
    image:
      "https://res.cloudinary.com/dyzszn177/image/upload/v1750002802/nusrat-jahan_eqznln.jpg",
    message:
      "Their course on data structures was exactly what I needed. The platform is easy to use and content is top-notch.",
  },
  {
    name: "Rajib Paul",
    title: "Incredible experience learning practical topics through EduCore",
    image:
      "https://res.cloudinary.com/dyzszn177/image/upload/v1750002802/rajib-paul_zuktyc.jpg",
    message:
      "I use EduCore to sharpen my knowledge and teach others. The interface is smooth and the support is amazing!",
  },
];

// Custom arrows
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-brand-blue hover:text-white transition"
    >
      <GrNext size={20} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-brand-blue hover:text-white transition"
    >
      <GrPrevious size={20} />
    </div>
  );
};

const TestimonialCarousel = () => {
  const { darkMode } = useContext(AuthContext);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="testimonial  pb-5 md:pb-10  relative">
      <h2
        className="text-center font-semibold text-brand-blue mb-2"
        data-aos="fade-down"
      >
        Student Testimonials
      </h2>
      <p
        className="text-center text-brand-blue font-semibold text-xl lg:text-[40px] mb-4 lg:mb-6"
        data-aos="fade-up"
      >
        What Our Learners Say
      </p>
      <div className="max-w-[95%] lg:max-w-6xl mx-auto lg:px-6 relative">
        <Slider {...settings}>
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="p-4 min-h-[360px]"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div
                className={`h-full w-full   p-6 border border-gray-100 flex flex-col justify-between text-center md:text-left hover:shadow-xl hover:scale-105 transition-transform duration-300 ${
                  darkMode
                    ? " bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-md rounded-lg text-white"
                    : "bg-base-100 text-black"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-lg  mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-base mb-4">
                    "{item.message}"
                  </p>
                </div>
                <div className="flex items-center flex-col md:flex-row gap-3 mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold  mb-1">{item.name}</p>
                    <div className="flex text-yellow-400 gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
