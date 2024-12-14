import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BACK_IMG } from "../utils/constants";

const LoginPage = () => {
  const [isSignInForm, setIsSetInForm] = useState(true);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSetInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <Header />
        <img src={LOGIN_BACK_IMG} alt="Login_background_img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 p-12 my-36 mx-auto absolute right-0 left-0 text-gray-300 rounded-lg bg-black bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={fullName}
            placeholder="Enter Full Name"
            className="p-4 m-4 w-full bg-black border-gray-300 rounded"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-black border-gray-300 rounded"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-4 w-full bg-black border-gray-300 rounded"
        />
        <button className="p-4 m-4 w-full rounded bg-red-700">Sign In</button>
        <strong className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}{" "}
        </strong>
      </form>
    </div>
  );
};

export default LoginPage;
