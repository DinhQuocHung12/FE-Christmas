interface Values {
  // name: string;
  email: string;
  password: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

function Validation(values: Values): Errors {
  let error: Errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   ^ bắt đầu chuỗi.
// [^\s@]+ tìm một hoặc nhiều ký tự không phải là khoảng trắng hoặc @.
// @ tìm ký tự @.
// [^\s@]+\.[^\s@]+ tìm một hoặc nhiều ký tự không phải là khoảng trắng hoặc @, theo sau là một dấu chấm và một hoặc nhiều ký tự không phải là khoảng trắng hoặc @.
// $ kết thúc chuỗi. Nếu một chuỗi khớp với biểu thức chính quy này, nó có thể là một địa chỉ email hợp lệ.
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{10,}$/;


// ^ bắt đầu chuỗi.
// (?=.*\d) yêu cầu ít nhất một chữ số.
// (?=.*[a-z]) yêu cầu ít nhất một chữ cái viết thường.
// (?=.*[!@#$%]) yêu cầu ít nhất một ký tự đặc biệt từ tập hợp [!@#$%].
// [a-zA-Z0-9!@#$%]{10,} yêu cầu chuỗi phải có ít nhất 10 ký tự, bao gồm chữ cái viết hoa, viết thường, chữ số và ký tự đặc biệt từ tập hợp [!@#$%].
// $ kết thúc chuỗi. Nếu một chuỗi khớp với biểu thức chính quy này, nó có thể là một mật khẩu hợp lệ theo tiêu chuẩn này.

 
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
