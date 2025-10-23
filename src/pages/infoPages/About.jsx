import React, { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../contexts/auth/AuthContext";

const About = () => {
  const { darkMode } = useContext(AuthContext);

  useTitle("About Us | EduCore Learning Platform");
  return (
    <>
      <div
        className={`bg-brand-blue py-5 md:py-8  px-4 ${
          darkMode
            ? " bg-gradient-to-r from-gray-800  to-gray-800 shadow-md rounded-lg text-white"
            : "bg-base-100 text-black"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">About Us</h2>
        </div>
      </div>

      <div className="xl:py-15 py-10 px-4">
        <div
          className={`container mx-auto  rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10  ${
            darkMode
              ? " bg-gradient-to-r from-gray-900  to-gray-900 shadow-lg rounded-lg text-white"
              : "bg-base-100 text-black"
          }`}
        >
          <p>
            <strong>EduCore</strong> is a modern online learning platform
            designed to empower individuals through high-quality courses taught
            by industry experts. Whether you're a beginner or looking to upgrade
            your skills, EduCore provides a flexible, self-paced, and engaging
            environment to help you achieve your goals.
          </p>

          <p>
            Our platform offers a wide range of courses across categories like
            Web Development, Data Science, UI/UX Design, Marketing, Programming,
            and more. We emphasize real-world skills, structured learning paths,
            and hands-on projects to ensure every learner gets the best possible
            outcome.
          </p>

          <p>
            At EduCore, we believe education should be accessible, affordable,
            and effective. That’s why we offer:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Expert instructors with real-world experience</li>
            <li>Lifetime access to all enrolled courses</li>
            <li>Certificate upon completion</li>
            <li>Project-based learning for portfolio building</li>
            <li>Mobile-friendly platform to learn from anywhere</li>
          </ul>

          <p>
            Since our launch, we’ve helped hundreds of learners grow their
            careers and gain confidence in their skills. We are continuously
            working to add new content, improve user experience, and bring
            innovative learning solutions.
          </p>

          <p>
            Thank you for choosing EduCore. Let’s upgrade your skills and unlock
            your full potential together.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
