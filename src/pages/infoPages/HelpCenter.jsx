import React, { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../contexts/auth/AuthContext";

const HelpCenter = () => {
  useTitle("Help Center | EduCore Learning Platform");
  const { darkMode } = useContext(AuthContext);

  return (
    <>
      {/* Header Section */}
      <div
        className={`py-12 px-4 transition duration-300 ${
          darkMode ? "bg-gray-800" : "bg-brand-blue"
        }`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Help Center
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            Need help? We’re here to support your learning journey.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="xl:py-16 py-10 px-4 flex justify-center">
        <div
          className={`max-w-4xl w-full rounded-2xl shadow-lg p-6 md:p-10 space-y-6 transition duration-300 ${
            darkMode
              ? "bg-gradient-to-r from-gray-800  to-gray-800 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          <p>
            Welcome to the <strong>EduCore Help Center</strong>. We're here to
            assist you with any questions, technical issues, or guidance you may
            need while using our platform. Below you'll find answers to common
            queries and directions to get support quickly.
          </p>

          <p>
            Here are some of the frequently asked topics we can help you with:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Account Issues:</strong> Trouble logging in, resetting
              your password, or updating your profile information.
            </li>
            <li>
              <strong>Course Access:</strong> Can’t find your enrolled courses,
              or facing issues with course videos or materials.
            </li>
            <li>
              <strong>Enrollment & Payment:</strong> Questions about how to
              enroll, payment methods, or transaction failures.
            </li>
            <li>
              <strong>Certificates:</strong> Didn’t receive your certificate
              after completing a course? Let us help.
            </li>
            <li>
              <strong>Technical Support:</strong> Site loading issues, broken
              links, or bugs in the platform.
            </li>
          </ul>

          <p>
            If you don’t find your answer here, feel free to reach out directly.
            Our support team is available to assist you 24/7.
          </p>

          <div
            className={`p-5 rounded-xl border transition duration-300 ${
              darkMode
                ? "border-gray-500 bg-gray-700/40"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <p className="font-semibold mb-2">📞 Contact Us</p>
            <p>
              📧 Email: <strong>support@educore.com</strong>
              <br />
              ☎️ Phone: <strong>+880-1234-567890</strong>
              <br />
              💬 Live Chat: Use the chat icon on the bottom-right corner.
            </p>
          </div>

          <p>
            Thank you for learning with <strong>EduCore</strong>. Your success
            is our priority, and we're always here to help.
          </p>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
