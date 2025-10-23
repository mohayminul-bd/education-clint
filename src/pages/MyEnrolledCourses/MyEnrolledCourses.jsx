import React, { useCallback, useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";
import PageLoader from "../../components/PageLoader";
import MyEnrolledCoursesRow from "./MyEnrolledCoursesRow";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/auth/AuthContext";

const MyEnrolledCourses = () => {
  const { darkMode } = useContext(AuthContext);

  const { user } = UseAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("My Enrolled Courses | EduCore Learning Platform");

  const refetch = useCallback(async () => {
    try {
      const token = await user.getIdToken();
      const res = await axios.get(
        `${import.meta.env.VITE_apiUrl}/my-enrollments`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email: user.email },
        }
      );
      setCourses(res.data.data);
    } catch (err) {
      toast.error("Failed to reload enrolled courses", err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;
    refetch();
  }, [user, refetch]);

  if (loading) return <PageLoader />;

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
            My Enrolled Courses
          </h2>
        </div>
      </div>
      <div className="-mt-48 mb-10 lg:mb-20 px-4 ">
        <div
          className={`container mx-auto  rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-black1/10  ${
            darkMode
              ? " bg-gradient-to-r from-gray-900  to-gray-900 shadow-lg rounded-lg text-white"
              : "bg-base-100 text-black"
          }`}
        >
          <h3 className="text-xl font-semibold  mb-6 text-center">
            Review all the courses you've joined and manage your learning
            journey with ease.
          </h3>
          <div className="overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th className="hidden md:block">Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500 py-6">
                      You haven't enrolled any courses yet.
                    </td>
                  </tr>
                ) : (
                  courses.map((course, index) => (
                    <MyEnrolledCoursesRow
                      key={course._id}
                      course={course}
                      index={index}
                      refetch={refetch}
                    />
                  ))
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th className="hidden md:block">Description</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEnrolledCourses;
