function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{10,}$/;
  //mật khẩu phải có ít nhất 10 ký tự, bao gồm ít nhất một chữ số, một chữ cái viết thường và một ký tự đặc biệt, biểu thức chính quy của bạn sẽ trông

  if (values.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }
  if (values.email === "") {
    error.email = "Name should not be empty";
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