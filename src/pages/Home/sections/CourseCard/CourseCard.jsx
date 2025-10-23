import dayjs from "dayjs";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const {
    _id,
    title,
    price,
    totalLessons,
    category,
    description,
    image,
    createdAt,
  } = course;

  const [showFullDesc, setShowFullDesc] = useState(false);

  const shortDescription =
    description?.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <div className="border border-gray-100 p-4 md:p-6 rounded-xl flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <figure>
        <img
          className="rounded-xl w-full h-[250px] object-cover object-center"
          src={image}
          alt={title}
        />
      </figure>

      {/* Content */}
      <div className="flex-1 mt-4 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mt-2 mb-2 text-sm text-gray-500">
            <h5 className="text-blue-600">{category}</h5>
            <p>Created at: {dayjs(createdAt).format("DD MMM YYYY")}</p>
          </div>

          <div className="flex justify-between items-center font-semibold mb-2">
            <h3 className="text-lg">{title}</h3>
            <p className="text-blue-600">${price}</p>
          </div>

          <p className="text-gray-600 mb-1">
            {showFullDesc ? description : shortDescription}
          </p>

          {description.length > 120 && (
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="text-blue-600 font-medium hover:underline mb-2"
            >
              {showFullDesc ? "Show Less" : "See More"}
            </button>
          )}

          <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
            <FaGraduationCap color="#FB6238" size={18} /> {totalLessons} Lessons
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/course-details/${_id}`}
          className="text-sm bg-blue-600 text-white rounded-full border-0 font-medium py-2 px-5 hover:bg-blue-700 text-center transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
