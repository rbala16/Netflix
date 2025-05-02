export const checkValidCredentials = (email, password) => {
  // Validate email format
  const isEmailValid =
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
  if (!isEmailValid) {
    return "Email is not valid.";
  }

  // Validate password presence and format
  if (!password) {
    return "Please enter a password.";
  }

  const isPasswordValid =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
      password
    );
  if (!isPasswordValid) {
    return "Password must be 8-16 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special character.";
  }

  // Return nothing if both are valid
  return null;
};

export const checkFullNameValid = (fullName) => {
  // Validate full name presence and format
  if (!fullName) {
    return "Please enter your full name.";
  }

  const isFullNameValid = /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/.test(
    fullName
  );
  if (!isFullNameValid) {
    return "Please enter a valid full name (letters and spaces only).";
  }

  // Return nothing if valid
  return null;
};
