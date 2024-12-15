import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BACK_IMG } from "../utils/constants";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkFullNameValid, checkValidCredentials } from "../utils/validate";

const LoginPage = () => {
  const [isSignInForm, setIsSetInForm] = useState(true);
  const [errorInCredMessage, setErrorInCredMessage] = useState(null);
  const [errorInNameMessage, setErrorInNameMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSetInForm(!isSignInForm);
    setErrorInCredMessage(null);
    setErrorInNameMessage(null);
  };

  const validateInputs = () => {
    const credError = checkValidCredentials(
      email.current.value,
      password.current.value
    );
    const nameError = !isSignInForm
      ? checkFullNameValid(fullName.current.value)
      : null;

    setErrorInCredMessage(credError);
    setErrorInNameMessage(nameError);

    return { credError, nameError };
  };
  //signup
  const signUpUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      console.log("Successfully signed up:", userCredential.user);
    } catch (error) {
      setErrorInCredMessage(error.message);
    }
  };

//singin
const signInUser = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword( auth,
      email.current.value,
      password.current.value);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};
  const handleButtonClick = () => {
       // Validate inputs and update error states
    const { credError, nameError } = validateInputs();
// Prevent submission if validation fails
    if (credError || nameError) return;
 // Determine whether to sign up or sign in
    if (!isSignInForm) {
      signUpUser();
    } else {
      signInUser()
    }
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
          type="email"
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
        <p className="text-red-700 font-bold py-2 m-4">
          {errorInCredMessage} {!isSignInForm && errorInNameMessage}
        </p>
        <button
          className="p-4 m-4 w-full rounded bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
