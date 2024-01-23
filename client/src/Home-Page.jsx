import React from 'react'

function Home() {
  return (
      <div className="flex flex-col min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-xl font-semibold">
          CHAIN
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 inline"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          CONNECT
        </h1>
        <div className="space-x-4 font-audrey font-semibold">
          <a className="hover:underline" href="#">
            Hire Freelancer
          </a>
          <a className="hover:underline" href="#">
            Post a job
          </a>
          <a className="hover:underline" href="#">
            Browse jobs
          </a>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-full">
            Sign Up
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2 hover:bg-gray-700 rounded-full">
            Login
          </button>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-6xl font-extrabold mb-4">
          Connect Through Chain Connect
        </h2>
        <p className="text-2xl font-light">Talents at your fingertips</p>
      </main>
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <hr className="border-gray-600 w-1/4" />
          <h2 className="text-4xl font-bold mx-4">Browse our categories</h2>
          <hr className="border-gray-600 w-1/4" />
        </div>
      </div>
      <div className="flex justify-center p-6">
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-black hover:bg-gray-200 rounded-full text-lg px-8 py-2">
          View All
        </button>
      </div>
      <footer className="bg-gray-800 text-center p-6">
        <h1 className="text-2xl font-bold mb-4">
          CHAIN
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 inline"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          CONNECT
        </h1>
        <div className="flex justify-center space-x-4 mt-2">
          <a className="hover:underline text-gray-300" href="#">
            About Us
          </a>
          <a className="hover:underline text-gray-300" href="#">
            Contact Us
          </a>
          <a className="hover:underline text-gray-300" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline text-gray-300" href="#">
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a className="hover:underline text-gray-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 inline"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a className="hover:underline text-gray-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 inline"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a className="hover:underline text-gray-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 inline"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a className="hover:underline text-gray-300" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 inline"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width={4} height={12} x={2} y={9} />
              <circle cx={4} cy={4} r={2} />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-300 mt-4">
          © 2024 Chain Connect. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home