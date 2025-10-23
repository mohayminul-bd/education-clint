import React, { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../contexts/auth/AuthContext";

const TermsAndConditions = () => {
  useTitle("Terms and Conditions | EduCore Learning Platform");
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
            Terms & Conditions
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            Please read our terms carefully before using EduCore.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="xl:py-16 py-10 px-4 flex justify-center">
        <div
          className={`max-w-4xl w-full rounded-2xl shadow-lg p-6 md:p-10 space-y-6 transition duration-300 ${
            darkMode
              ? "bg-gradient-to-r from-gray-800  to-gray-800 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          <p>
            Welcome to <strong>EduCore</strong>. By accessing or using our
            website and services, you agree to be bound by the following terms
            and conditions. Please read them carefully before using the
            platform.
          </p>

          <section>
            <h3 className="font-semibold text-lg mb-1">1. Use of Platform</h3>
            <p>
              EduCore provides online educational content for personal and
              non-commercial use only. You agree not to misuse our services or
              attempt to access restricted areas of the platform without
              authorization.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">2. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials. You agree to provide accurate information
              during registration and keep your profile updated.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">
              3. Enrollment & Payments
            </h3>
            <p>
              When you enroll in a course, you agree to pay the applicable fees.
              All payments are processed securely. EduCore reserves the right to
              change course pricing at any time.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">4. Refund Policy</h3>
            <p>
              Refunds may be issued within 7 days of purchase if the course
              progress is less than 20%. No refunds will be provided after
              certificate issuance or significant course completion.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">
              5. Intellectual Property
            </h3>
            <p>
              All content on EduCore, including videos, text, graphics, and
              logos, are the intellectual property of EduCore or its
              instructors. You may not copy, redistribute, or republish content
              without permission.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">6. Code of Conduct</h3>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respect fellow learners and instructors.</li>
              <li>Do not post offensive, harmful, or irrelevant content.</li>
              <li>Use the platform ethically and honestly.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">7. Termination</h3>
            <p>
              EduCore reserves the right to suspend or terminate your account if
              you violate these terms, misuse the platform, or engage in
              fraudulent activity.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">8. Changes to Terms</h3>
            <p>
              We may update these terms from time to time. Continued use of the
              platform after changes implies your acceptance of the revised
              terms.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-1">9. Contact</h3>
            <p>
              For any questions regarding these terms, please contact us at{" "}
              <strong>support@educore.com</strong>.
            </p>
          </section>

          <p>
            Thank you for using <strong>EduCore</strong>. Your trust and
            compliance help us maintain a safe and effective learning
            environment for everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
