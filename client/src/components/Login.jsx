import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';

function Login({ toggleSignup }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const validatePassword = () => {
    return formData.password.length >= 8;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (!emailValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }

    if (!passwordValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters',
      }));
    }

    if (emailValid && passwordValid) {
      loginMethod(formData);
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  const loginMethod = async (data) => {
    setFormData({
      email: '',
      password: '',
    });
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          console.log(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          navigate('/profile');
        }
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="h-screen flex">
      <img className="hidden lg:block w-1/2" src="src/assets/theme.gif" alt="" />
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 font-mono">
        <div>
          <div className="text-xl font-bold text-center lg:text-left">
            <span className="text-green-600">&#9650;</span>
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
          </div>

          <div className="mt-10 flex space-x-4 font-bold text-3xl lg:text-left">
            <h2>Hello,</h2>
            <h2>Welcome Back</h2>
          </div>

          <form action="" className="mt-10 w-[80%] lg:w-96 mx-auto space-y-4">
            <h4>Login to manage your account</h4>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`border w-full py-2 px-4 ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`border w-full py-2 px-4 ${errors.password ? 'border-red-500' : ''}`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <button
              className={`w-full mt-2 bg-green-600 py-2 rounded text-white hover:bg-green-500 ${
                errors.email || errors.password ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={(e) => handleLogin(e)}
              disabled={errors.email || errors.password}
            >
              Login
            </button>
          </form>

          <div className="text-center space-y-4 mt-4">
            <div className="text-center text-sm mt-4">
              Don't have an account?
              <span className="text-blue-600 hover:text-blue-400 cursor-pointer" onClick={toggleSignup}>
                Sign Up Here..
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
