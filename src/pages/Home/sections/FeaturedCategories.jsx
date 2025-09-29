import React, { useEffect } from "react";
import {
  FaCode,
  FaChartLine,
  FaPaintBrush,
  FaLanguage,
  FaBriefcase,
  FaShieldAlt,
  FaRobot,
  FaHandshake,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    name: "Web Development",
    icon: <FaCode />,
    desc: "Build modern websites & apps",
  },
  {
    name: "Data Science",
    icon: <FaChartLine />,
    desc: "Analyze & visualize data",
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    desc: "Design intuitive experiences",
  },
  {
    name: "Programming Languages",
    icon: <FaLanguage />,
    desc: "Master popular languages",
  },
  {
    name: "Business & Marketing",
    icon: <FaBriefcase />,
    desc: "Boost business strategies",
  },
  {
    name: "Cybersecurity",
    icon: <FaShieldAlt />,
    desc: "Protect systems & networks",
  },
  {
    name: "Artificial Intelligence",
    icon: <FaRobot />,
    desc: "Explore AI & ML concepts",
  },
  {
    name: "Soft Skills",
    icon: <FaHandshake />,
    desc: "Improve communication & teamwork",
  },
];

const FeaturedCategories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-brand-gray3 py-12 lg:py-20 px-4">
      <h2
        className="text-center font-semibold text-brand-blue mb-2"
        data-aos="fade-down"
      >
        Popular Categories
      </h2>
      <p
        className="text-center text-brand-black1 font-semibold text-xl lg:text-[40px] mb-6 lg:mb-12"
        data-aos="fade-up"
      >
        Explore Trending Topics
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-3 bg-white p-6 rounded-xl shadow-sm border border-brand-gray2 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div className="text-3xl text-brand-blue">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
