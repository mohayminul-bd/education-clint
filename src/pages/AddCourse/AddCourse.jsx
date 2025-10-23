import React, { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router";
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

const AddCourse = () => {
  const { darkMode } = useContext(AuthContext);
  const { user } = UseAuth();
  const navigate = useNavigate();
  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value.trim();
    const price = form.price.value.trim();
    const duration = form.duration.value.trim();
    const totalVideos = form.totalVideos.value.trim();
    const totalLessons = form.totalLessons.value.trim();
    const category = form.category.value.trim();
    const level = form.level.value.trim();
    const accessType = form.accessType.value.trim();
    const description = form.description.value.trim();
    const seats = form.seats.value.trim();
    const image = form.image.value.trim();

    if (
      !title ||
      !price ||
      !duration ||
      !totalVideos ||
      !totalLessons ||
      !category ||
      !level ||
      !accessType ||
      !description ||
      !seats ||
      !image
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());
    formEntries.authorEmail = user.email;
    formEntries.createdAt = new Date().toISOString();
    formEntries.seats = parseInt(formEntries.seats);
    axios
      .post(`${import.meta.env.VITE_apiUrl}/courses`, formEntries)
      .then(function (response) {
        const result = response.data;
        if (result.insertedId) {
          toast.success("Course added successfully");
          form.reset();
          navigate("/");
        }
      })
      .catch(function (error) {
        toast.success(error);
      });
  };
  useTitle("Add a New Course | EduCore Learning Platform");
  return (
    <>
      <div
        className={`bg-brand-blue pt-12 pb-52 px-4 ${
          darkMode
            ? " bg-gradient-to-r from-gray-800  to-gray-800 shadow-md rounded-lg text-white"
            : "bg-base-100 text-black"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            Add a New Course
          </h2>
        </div>
      </div>
      <div className="-mt-48 mb-10 lg:mb-20 px-4">
        <div
          className={`container mx-auto  rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10  ${
            darkMode
              ? " bg-gradient-to-r from-gray-900  to-gray-900 shadow-lg rounded-lg text-white"
              : "bg-base-100 text-black"
          }`}
        >
          <h3 className="text-xl font-semibold  mb-6 text-center">
            Provide All Course Details Accurately Before Submission
          </h3>

          <form onSubmit={handleAddCourse}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="title"
                placeholder="Course Title *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price (USD) *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
                required
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration (e.g., 6h 30min)"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              />
              <input
                type="number"
                name="totalVideos"
                placeholder="Total Videos *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              />
              <input
                type="number"
                name="totalLessons"
                placeholder="Total Lessons *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
              />
              <input
                type="url"
                name="image"
                placeholder="Image URL *"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
                required
              />
              <input
                type="number"
                name="seats"
                placeholder="Enter total number of seats"
                className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  darkMode ? " bg-gray-800" : "bg-gray-50"
                }`}
                required
              />
              <select
                required
                defaultValue=""
                name="category"
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

              <select
                required
                defaultValue=""
                name="level"
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

              <select
                required
                defaultValue=""
                name="accessType"
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
            <textarea
              rows="4"
              name="description"
              placeholder="Course Description *"
              required
              className={`w-full px-4 py-3  rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                darkMode ? " bg-gray-800" : "bg-gray-50"
              }`}
            ></textarea>

            <button
              type="submit"
              className="bg-brand-blue  text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
