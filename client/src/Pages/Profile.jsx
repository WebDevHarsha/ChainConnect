import React from "react";

function Profile() {
  return (
    <div className="relative flex flex-col items-center gap-8 p-4 md:p-8 bg-black text-gray-400">
      <button className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 md:w-32 md:h-32">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
          JD
        </span>
      </span>
      <h1 className="text-2xl font-bold text-gray-300">Aryan Sharma</h1>
      <p className="text-center text-gray-500">
        Full Stack Developer with over 5 years of experience in JavaScript,
        React, and Node.js.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          JavaScript
        </div>
        {/* Add similar divs for other skills */}
      </div>
      <div className="mt-8" />
      <h2 className="text-xl font-bold mt-8 text-gray-300">Contact</h2>
      <p className="text-center text-gray-500">aryansharma2k4@gmail.com</p>
      <div className="flex gap-4 justify-center mt-2">
        <a className="text-gray-500 hover:text-gray-300" href="#">
          {/* Add your SVG for the first social media icon */}
        </a>
        <a className="text-gray-500 hover:text-gray-300" href="#">
          {/* Add your SVG for the second social media icon */}
        </a>
        <a className="text-gray-500 hover:text-gray-300" href="#">
          {/* Add your SVG for the third social media icon */}
        </a>
      </div>
      <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-200">
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;
