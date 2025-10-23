import React, { useContext, useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCirclePlay, FaMedal } from "react-icons/fa6";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";
import CourseListItem from "./CourseListItem";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { LuCalendarPlus } from "react-icons/lu";
import { AuthContext } from "../../contexts/auth/AuthContext";

const CourseDetails = () => {
  const { darkMode } = useContext(AuthContext);
  const [recentCourses, setRecentCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);
  const [seatLeft, setSeatLeft] = useState(0);
  const [loadingEnroll, setLoadingEnroll] = useState(false);

  const { user } = UseAuth();
  const result = useLoaderData();

  const {
    _id,
    title,
    price,
    duration,
    totalVideos,
    category,
    level,
    accessType,
    description,
    seats,
    image,
    createdAt,
    authorInfo,
  } = result.data;

  useTitle(`${title} | EduCore Learning Platform`);

  useEffect(() => {
    setSeatLeft(seats);
    axios
      .get(`${import.meta.env.VITE_apiUrl}/courses?filter=recent&limit=5`)
      .then((res) => {
        setRecentCourses(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [seats]);

  useEffect(() => {
    const fetchSeat = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_apiUrl}/courses/${_id}`
        );
        setSeatLeft(res.data.seats);
      } catch {
        toast.error("Failed to fetch course seat info");
      }
    };

    if (!user || typeof user.getIdToken !== "function") {
      setEnrolled(false);
      fetchSeat();
      return;
    }

    const checkEnrollment = async () => {
      try {
        const token = await user.getIdToken();
        const res = await axios.get(
          `${import.meta.env.VITE_apiUrl}/is-enrolled`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              courseId: _id,
              email: user.email,
            },
          }
        );
        setEnrolled(res.data.enrolled);
      } catch (err) {
        toast.error(
          "Enrollment check failed:",
          err?.response?.data || err.message
        );
      }
    };

    checkEnrollment();
    fetchSeat();
  }, [user, _id]);

  const handleEnroll = async () => {
    if (!user || typeof user.getIdToken !== "function") {
      toast.error("User not authenticated yet");
      return;
    }

    if (loadingEnroll) return;
    setLoadingEnroll(true);

    try {
      const token = await user.getIdToken();
      const res = await axios.post(
        `${import.meta.env.VITE_apiUrl}/enroll`,
        { courseId: _id, email: user.email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setEnrolled(res.data.enrolled);
      setSeatLeft(res.data.seatsLeft);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoadingEnroll(false);
    }
  };

  if (loading) return <PageLoader />;

  return (
    <>
      {/* Hero Section */}
      <div
        className={`bg-gradient-to-r  py-16 px-6 ${
          darkMode
            ? "  shadow-md rounded-lg text-white"
            : "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-black"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left side */}
          <div className="md:w-[560px] text-white">
            <div className="flex text-yellow-400 gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
            <h1 className="font-bold text-3xl lg:text-5xl mb-4">{title}</h1>
            <p className="text-lg opacity-90">
              {category} • {level}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-5">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-lg shadow-lg flex-1">
                <img
                  src={authorInfo.photoURL}
                  alt={authorInfo.displayName}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-200 text-sm">Instructor</p>
                  <h4 className="font-semibold">{authorInfo.displayName}</h4>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-lg shadow-lg flex-1">
                <div className="w-14 h-14 flex items-center justify-center bg-indigo-700 rounded-full text-white text-xl">
                  <FaRegBookmark />
                </div>
                <div>
                  <p className="text-gray-200 text-sm">Category</p>
                  <h4 className="font-semibold">{category}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div
            className={`md:w-[320px]  rounded-2xl shadow-lg p-6 ${
              darkMode
                ? " bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-md rounded-lg text-white"
                : "bg-base-100 text-black"
            }`}
          >
            <h3 className="text-2xl mb-3 font-semibold">Get the course</h3>
            <h3 className="text-red-600 py-3">
              this bank card not set it's working my project payment option
            </h3>
            <p className="text-xl font-semibold mb-5 text-indigo-700">
              $ {price} USD
            </p>

            {/* Enroll Button */}
            {!user ? (
              <button
                disabled
                className="bg-gray-300 text-gray-600 w-full p-3 rounded-md font-medium cursor-not-allowed"
              >
                Please login to enroll!
              </button>
            ) : seatLeft <= 0 ? (
              enrolled ? (
                <button
                  onClick={handleEnroll}
                  disabled={loadingEnroll}
                  className={`bg-red-600 hover:bg-red-700 text-white w-full p-3 rounded-md font-medium transition ${
                    loadingEnroll ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loadingEnroll ? "Processing..." : "Remove Enrollment"}
                </button>
              ) : (
                <p className="text-red-600 font-medium text-center">
                  No seats left
                </p>
              )
            ) : (
              <button
                onClick={handleEnroll}
                disabled={loadingEnroll}
                className={`${
                  enrolled
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white w-full p-3 rounded-md font-medium transition ${
                  loadingEnroll ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loadingEnroll
                  ? "Processing..."
                  : enrolled
                  ? "Enrolled"
                  : "Enroll Now"}
              </button>
            )}

            <p className="text-center text-sm mt-2 text-gray-500">
              {seatLeft} seats left
            </p>

            {/* Course Meta */}
            <div
              className={`space-y-3 mt-5 pt-5 border-t ${
                darkMode
                  ? " bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-md rounded-lg text-white"
                  : "bg-base-100 text-black"
              }`}
            >
              <div className="flex items-center gap-3">
                <FiBarChart className="text-indigo-600" />
                <p>Level: {level}</p>
              </div>
              <div className="flex items-center gap-3">
                <AiFillClockCircle className="text-indigo-600" />
                <p>Duration: {duration}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCirclePlay className="text-indigo-600" />
                <p>Videos: {totalVideos}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMedal className="text-indigo-600" />
                <p>{accessType}</p>
              </div>
              <div className="flex items-center gap-3">
                <LuCalendarPlus className="text-indigo-600" />
                <p>{dayjs(createdAt).format("DD MMM YYYY, h:mm A")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 my-12 px-4">
        <div className="flex-[2]">
          <div className="mb-8">
            <button className="text-base bg-indigo-600 text-white rounded-full px-6 py-2 hover:bg-indigo-700 transition">
              Overview
            </button>
          </div>
          <figure className="mb-6">
            <img className="rounded-xl shadow-lg" src={image} alt={title} />
          </figure>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Sidebar Recent */}
        <div className="flex-1">
          <h4 className="text-2xl font-semibold mb-4 pb-3 border-b border-gray-200">
            Recent Courses
          </h4>
          <div className="flex flex-col gap-6">
            {recentCourses.map((item) => (
              <CourseListItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
