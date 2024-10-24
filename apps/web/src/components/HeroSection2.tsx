import React from "react";
import Link from "next/link";

const HeroSection2: React.FC = () => {
  return (
    <div className="bg-gray-900 dark:bg-blac min-h-[90vh] relative overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background - Adding animated shapes or gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500  dark:from-gray-800 dark:to-gray-900 opacity-75"></div>

      {/* 3D Floating Circle */}
      <div className="absolute w-96 h-96 bg-indigo-400 dark:bg-indigo-700 opacity-40 rounded-full blur-3xl top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        {" "}
        circle
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute w-72 h-72 bg-pink-500 dark:bg-pink-700 opacity-60 rounded-full blur-3xl bottom-32 left-1/4 animate-pulse"></div>

      {/* Text and Call-to-Action */}
      <div className="relative z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-wider">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            CodeSide
          </span>
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
          Redefining the way you code, with intuitive collaboration and
          lightning-fast challenges.
        </p>
        <div className="mt-8">
          <Link
            href="/signup"
            className="bg-pink-500 hover:bg-yellow-500 dark:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-110"
          >
            Get Started
          </Link>
        </div>
      </div>

      
      <FeaturesSection/>
    </div>
  );
};

// features section component
const FeaturesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-900 mt-16">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
        Our Cutting-Edge Features
      </h2>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* First Feature */}
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <img
            src="https://your-image-url.com/collab.jpg"
            alt="collaboration"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Seamless Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Real-time collaborative coding with built-in tools that make
              teamwork effortless.
            </p>
          </div>
        </div>

        {/* Second Feature */}
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <img
            src="https://your-image-url.com/challenges.jpg"
            alt="challenges"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Interactive Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Solve coding challenges on an interactive platform with instant
              feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
