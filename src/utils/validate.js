export const checkValidateData = (name, email, password) => {
  const errors = [];

  const isValidName = /^[a-zA-Z\s'-]+$/.test(name);
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isValidName && name !== "") errors.push("Name is invalid"); // skip name check for sign in
  if (!isValidEmail) errors.push("Email id is not valid");
  if (!isValidPassword) errors.push("Password is not valid");

  return errors; // return the array of errors, even if empty
};
