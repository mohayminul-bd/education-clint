import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import { AuthContext } from "../../../contexts/auth/AuthContext";

const LatestCourses = ({ latestCourses = [] }) => {
  // const { darkMode } = useContext(AuthContext);
  if (!Array.isArray(latestCourses)) {
    return (
      <section className="container mx-auto lg:mt-5 mb-12 lg:mb-25 px-4">
        <h2 className="text-center font-semibold text-brand-blue mb-2">
          Latest Courses
        </h2>
        <p className="text-center text-brand-blue font-semibold text-xl lg:text-[40px] mb-6 lg:mb-12">
          Upgrade Skills With EduCore
        </p>
        <p className="text-center text-gray-500">Loading courses...</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto lg:mt-5 mb-12 lg:mb-25 ">
      <h2 className="text-center font-semibold text-brand-blue mb-2">
        Latest Courses
      </h2>
      <p className="text-center text-brand-blue font-semibold text-xl lg:text-[40px] mb-6 lg:mb-12">
        Upgrade Skills With EduCore
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
        {latestCourses.length === 0 ? (
          <h1 className="text-center text-gray-500">There is no data</h1>
        ) : (
          latestCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        )}
      </div>
    </section>
  );
};

export default LatestCourses;
