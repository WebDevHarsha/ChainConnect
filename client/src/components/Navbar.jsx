import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import authService from "../appwrite/auth"
import {logout} from "../store/authSlice"

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [LoggedIn , isLoggedIn] = useState(false);
  const status = useSelector((state) => state.auth.status)

  useEffect(() => {
    if (status) {
      isLoggedIn(true);
    }
    else {
      isLoggedIn(false);
    }
  })

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/auth")
    })
  }

  return (
    <header className="container bg-opacity-50 mx-auto px-4 py-6 flex justify-between items-center bg-gray-800">
      <div className="flex items-center space-x-4">
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
          className="h-8 w-8 text-white"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        <span className="font-bold text-xl">CHAIN CONNECT</span>
      </div>
      <nav className="flex space-x-4">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black rounded-lg">
          Hire Freelancer
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black rounded-lg">
          Earn Money Freelancing
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black rounded-lg">
          Post a job
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-white bg-transparent hover:bg-white hover:text-black rounded-lg">
          Browse jobs
        </button>
        <Link to={LoggedIn ? '/profile' : '/auth'}>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-full">
              {LoggedIn ? 'Profile' : 'Sign Up'}
            </button>
          </Link>
          {status && <button onClick={handleLogout} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-full">
              Logout
          </button>}
      </nav>
    </header>
  )
}

export default Navbar