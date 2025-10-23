import React, { useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaInfinity,
  FaLayerGroup,
} from "react-icons/fa";
import WhyLearnWithUsCard from "./WhyLearnWithUsCard/WhyLearnWithUsCard";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyLearnWithUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Instructors",
      description:
        "Learn from certified industry professionals with real-world experience.",
      bgColor: "bg-blue-500",
    },
    {
      icon: <FaLayerGroup />,
      title: "Structured Curriculum",
      description: "Clear learning paths with progress tracking.",
      bgColor: "bg-green-500",
    },
    {
      icon: <FaLaptopCode />,
      title: "Real Projects",
      description:
        "Apply your skills on real-world projects to build a portfolio.",
      bgColor: "bg-pink-500",
    },
    {
      icon: <FaInfinity />,
      title: "Lifetime Access",
      description:
        "Access your enrolled courses anytime with free future updates.",
      bgColor: "bg-orange-500",
    },
  ];

  return (
    <section className="relative py-5 lg:py-5 overflow-hidden  ">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2
          className="text-center font-semibold text-brand-blue mb-3 text-lg lg:text-xl"
          data-aos="fade-up"
        >
          Why Choose Us
        </h2>
        <p
          className="text-center text-brand-blue font-bold text-2xl lg:text-[40px] mb-10 lg:mb-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Why Learn With EduCore
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 200} // stagger effect
              className="hover:-translate-y-2 transition-transform duration-300"
            >
              <WhyLearnWithUsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearnWithUs;
