interface Values {
  name: string;
  email: string;
  password: string;
}

function Validation(values: Values) {
  let error: { [key: string]: string } = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{10,}$/;

  if (values.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  
  return error;
}

export default Validation;
