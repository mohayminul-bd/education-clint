import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

const WhyLearnWithUsCard = ({ icon, title, description, bgColor }) => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div
      className={`p-6 rounded-xl border border-brand-gray2 text-center flex flex-col justify-between transition duration-300 
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-md text-white"
            : "bg-base-100 text-black"
        }
      `}
      style={{
        transition: "box-shadow 0.3s ease",
        width: "100%",
        maxWidth: "300px",
        height: "280px",
        margin: "0 auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "16px 24px 36px 12px rgba(1, 11, 28, 0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-lg text-white text-2xl mx-auto mb-4 ${bgColor}`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed px-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyLearnWithUsCard;
