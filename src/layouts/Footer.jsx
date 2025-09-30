import React from "react";
import logoImg from "../assets/educore-logo.png";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-brand-gray3 pt-12 lg:pt-20 px-4">
      {/* Newsletter Section */}
      <div className="container mx-auto rounded-3xl bg-gradient-to-br from-green-300 to-green-500 text-center py-10 px-6 shadow-lg">
        <h3 className="font-bold text-2xl lg:text-4xl text-white mb-3">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-white/90 mb-6">
          Get the latest updates, tips, and course recommendations.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 bg-white rounded-full py-3 pl-5 border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12 mt-16 text-sm">
        {/* Left */}
        <div className="md:w-6/12">
          <img
            src={logoImg}
            alt="EduCore Official Logo"
            className="w-36 mb-5"
          />
          <p className="text-brand-gray5 mb-6 max-w-md">
            EduCore is a modern online learning platform, offering top-notch
            courses, expert instructors, and flexible learning experiences to
            help you grow your career from anywhere.
          </p>

          {/* Social Icons */}
          <ul className="flex gap-4">
            <li>
              <Link
                to="https://www.facebook.com/arifuddincoder"
                target="_blank"
                className="bg-white shadow w-10 h-10 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition"
              >
                <FaFacebookF size={18} />
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com/arifuddincoder"
                target="_blank"
                className="bg-white shadow w-10 h-10 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition"
              >
                <FaXTwitter size={18} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/arifuddincoder/"
                target="_blank"
                className="bg-white shadow w-10 h-10 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="md:w-6/12 flex flex-col sm:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-brand-black1 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-brand-gray5">
              <li>
                <Link to="/" className="hover:text-brand-blue transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-blue transition"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-blue transition">
                  About EduCore
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-brand-blue transition"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-brand-black1 mb-4">
              Support & Info
            </h3>
            <ul className="space-y-2 text-brand-gray5">
              <li>
                <Link
                  to="/help-center"
                  className="hover:text-brand-blue transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-blue transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-blue transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-brand-blue transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto border-t border-gray-200 mt-12 pt-6 text-center text-brand-gray5 text-xs">
        © {new Date().getFullYear()} EduCore. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
