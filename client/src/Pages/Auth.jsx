import React, { useState } from 'react';
import Login from "../components/Login";
import SignUp from "../components/Signup";

function Auth() {
  const [signup, setSignup] = useState(true);

  const toggleSignup = () => {
    setSignup(!signup);
  };

  return (
    <div>
      {signup ? <SignUp toggleSignup={toggleSignup} /> : <Login toggleSignup={toggleSignup} />}
    </div>
  );
}

export default Auth;
