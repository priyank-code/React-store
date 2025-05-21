import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/404.jpg";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-6xl md:text-7xl font-bold text-green-600 mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img
        src={error}
        alt="404 - Not Found"
        className="w-full max-w-md h-auto mb-6 rounded-xl shadow-md"
      />
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
