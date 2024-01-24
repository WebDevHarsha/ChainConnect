import React, { useEffect, useState } from 'react';
import Login from "../components/Login";
import SignUp from "../components/Signup";
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [signup, setSignup] = useState(true);
  const navigate = useNavigate();
  
  const toggleSignup = () => {
    setSignup(!signup);
  };
  
  useEffect(() => {
    let storedUserData = localStorage.getItem("user");

    if (storedUserData !== null && storedUserData !== undefined) {
      try {
        storedUserData = JSON.parse(storedUserData);

        if (Object.keys(storedUserData).length !== 0) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    } 
  })

  return (
    <div>
      {signup ? <SignUp toggleSignup={toggleSignup} /> : <Login toggleSignup={toggleSignup} />}
    </div>
  );
}

export default Auth;
