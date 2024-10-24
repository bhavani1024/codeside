import React from "react";
import Link from "next/link";


const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/binary-code-number-system-concept-background-design_1017-52443.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Welcome to CodeSide
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Master coding skills, solve challenges, and ace your technical
            interviews.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Our Features
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Practice Coding"
            description="Solve coding challenges on a variety of topics and languages."
            icon="💻"
          />
          <FeatureCard
            title="Compete"
            description="Join coding competitions and rank on the global leaderboard."
            icon="🏆"
          />
          <FeatureCard
            title="Prepare for Interviews"
            description="Access interview-specific questions and mock interviews."
            icon="🎯"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-orange-500 dark:bg-gray-800 py-16 px-6 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(https://your-image-url.com/cta-bg.jpg)",
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Join thousands of coders improving their skills every day!
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-center">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default HeroSection;
