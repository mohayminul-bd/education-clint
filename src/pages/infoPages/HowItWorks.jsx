import React from "react";
import useTitle from "../../hooks/useTitle";

const HowItWorks = () => {
  useTitle("How It Works | EduCore Learning Platform");
  return (
    <>
      <div className="bg-brand-blue py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            How EduCore Works
          </h2>
        </div>
      </div>

      <div className="xl:py-15 py-10 px-4">
        <div className="container mx-auto bg-white rounded-2xl space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            Getting started with <strong>EduCore</strong> is quick, simple, and
            designed for learners of all levels. Our platform ensures that you
            can begin your learning journey in just a few easy steps without any
            hassle.
          </p>

          <p>
            Whether your goal is to master a new skill or advance your
            professional career, EduCore makes the process seamless and
            effective. Here’s how it works:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>1. Explore Courses:</strong> Discover a wide range of
              courses organized by skill level, industry, and topic.
            </li>
            <li>
              <strong>2. Enroll Instantly:</strong> Choose your desired course
              and enroll with just one click — no complicated process or hidden
              requirements.
            </li>
            <li>
              <strong>3. Learn at Your Own Pace:</strong> Access your courses
              anytime, anywhere. Watch video lessons, read resources, and
              complete tasks whenever it suits you.
            </li>
            <li>
              <strong>4. Practice with Projects:</strong> Apply what you’ve
              learned through practical projects and build a portfolio to
              showcase your skills.
            </li>
            <li>
              <strong>5. Get Certified:</strong> Upon completion, earn a
              professional certificate to validate and share your achievements.
            </li>
          </ul>

          <p>
            At EduCore, we’re committed to delivering a smooth, flexible, and
            learner-friendly experience. With lifetime access and a responsive
            design, you remain in full control of your learning journey.
          </p>

          <p>
            Ready to get started? Explore our courses today and take the first
            step toward a brighter and more skilled future with{" "}
            <strong>EduCore</strong>.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
