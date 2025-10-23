import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import UseAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/auth/AuthContext";

const categories = [
  "Computer Science",
  "Design",
  "Mathematics",
  "Language",
  "Marketing",
  "Programming",
];
const levels = ["Beginner", "Intermediate", "Advanced"];
const accessTypes = ["Lifetime Access", "1 Year Access", "Limited Access"];

const EditCourse = () => {
  const { darkMode } = useContext(AuthContext);

  const { user } = UseAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [errors, setErrors] = useState({});

  useTitle(`Edit Course | EduCore Learning Platform`);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = await user.getIdToken();
        const res = await axios.get(
          `${import.meta.env.VITE_apiUrl}/edit-course/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              email: user.email,
            },
          }
        );

        if (res.data.authorEmail !== user.email) {
          toast.error("You are not authorized to edit this course");
          navigate("/manage-courses", { replace: true });
          return;
        }

        setCourseData(res.data);
      } catch (error) {
        toast.error("Failed to fetch course data", error);
        navigate("/manage-courses", { replace: true });
      }
    };

    if (user) {
      fetchCourse();
    }
  }, [id, user, navigate]);

  if (!courseData) return <PageLoader />;

  const {
    title,
    price,
    duration,
    totalVideos,
    totalLessons,
    category,
    level,
    accessType,
    description,
    seats,
    image,
  } = courseData;

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCourse = {
      title: form.title.value.trim(),
      price: form.price.value.trim(),
      duration: form.duration.value.trim(),
      totalVideos: form.totalVideos.value.trim(),
      totalLessons: form.totalLessons.value.trim(),
      image: form.image.value.trim(),
      seats: parseInt(form.seats.value.trim()),
      category: form.category.value.trim(),
      level: form.level.value.trim(),
      accessType: form.accessType.value.trim(),
      description: form.description.value.trim(),
      updatedAt: new Date().toISOString(),
    };

    // 🔴 error handling
    const newErrors = {};
    Object.entries(updatedCourse).forEach(([key, value]) => {
      if (value === "" || value === 0 || (isNaN(value) && key === "seats")) {
        newErrors[key] = `Please fill the ${key} field.`;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return toast.error("Please fix the highlighted fields");
    }

    try {
      const token = await user.getIdToken();

      await axios.patch(
        `${import.meta.env.VITE_apiUrl}/edit-course/${id}`,
        updatedCourse,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            email: user.email,
          },
        }
      );

      toast.success("Course updated successfully!");
      navigate("/manage-courses");
    } catch (error) {
      toast.error("Failed to update course.", error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className={`bg-brand-blue pt-12 pb-52 px-4 ${
          darkMode
            ? " bg-gradient-to-r from-gray-800  to-gray-800 shadow-md rounded-lg text-white"
            : "bg-base-100 text-black"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            Edit Course Details
          </h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="-mt-36 mb-10 lg:mb-20 px-4">
        <div
          className={`container mx-auto  rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10  ${
            darkMode
              ? " bg-gradient-to-r from-gray-900  to-gray-900 shadow-lg rounded-lg text-white"
              : "bg-base-100 text-black"
          }`}
        >
          <h3 className="text-xl font-semibold  mb-6 text-center">
            Update the necessary fields below and save your changes
          </h3>

          <form onSubmit={handleUpdateCourse} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div>
                <input
                  name="title"
                  type="text"
                  defaultValue={title}
                  placeholder="Course Title *"
                  className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    darkMode ? " bg-gray-800" : "bg-gray-50"
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              {/* Price */}
              <div>
                <input
                  name="price"
                  type="number"
                  defaultValue={price}
                  placeholder="Price (USD) *"
                  className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    darkMode ? " bg-gray-800" : "bg-gray-50"
                  }`}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                )}
              </div>

              {/* Duration */}
              <input
                name="duration"
                type="text"
                defaultValue={duration}
                placeholder="Duration (e.g., 6h 30min)"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              />

              {/* Total Videos */}
              <input
                name="totalVideos"
                type="number"
                defaultValue={totalVideos}
                placeholder="Total Videos *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              />

              {/* Total Lessons */}
              <input
                name="totalLessons"
                type="number"
                defaultValue={totalLessons}
                placeholder="Total Lessons *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              />

              {/* Image */}
              <div>
                <input
                  name="image"
                  type="url"
                  defaultValue={image}
                  placeholder="Image URL *"
                  className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    darkMode ? " bg-gray-800" : "bg-gray-50"
                  }`}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
              </div>

              {/* Seats */}
              <div>
                <input
                  name="seats"
                  type="number"
                  defaultValue={seats}
                  placeholder="Enter total number of seats"
                  className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    darkMode ? " bg-gray-800" : "bg-gray-50"
                  }`}
                />
                {errors.seats && (
                  <p className="text-red-500 text-sm mt-1">{errors.seats}</p>
                )}
              </div>

              {/* Category */}
              <select
                name="category"
                defaultValue={category}
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              >
                <option value="" disabled>
                  Select Category *
                </option>
                {categories.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* Level */}
              <select
                name="level"
                defaultValue={level}
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              >
                <option value="" disabled>
                  Select Level *
                </option>
                {levels.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* Access Type */}
              <select
                name="accessType"
                defaultValue={accessType}
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              >
                <option value="" disabled>
                  Select Access Type *
                </option>
                {accessTypes.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <textarea
              name="description"
              rows="4"
              defaultValue={description}
              placeholder="Course Description *"
              className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                darkMode ? " bg-gray-800" : "bg-gray-50"
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Update Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCourse;
