function validateForm() {
  const form = document.forms["myForm"];
  const requiredFields = ["Name", "Password", "Address", "Email", "Mobile"];
  const emptyFields = [];

  requiredFields.forEach(field => {
    const value = form.elements[field].value.trim();
    if (value === "") {
      emptyFields.push(field);
    }
  });

  if (emptyFields.length > 0) {
    alert("The following fields are empty:\n" + emptyFields.join(", "));
    return false;
  }

  const mobile = form.elements["Mobile"].value.trim();
  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  const email = form.elements["Email"].value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  const password = form.elements["Password"].value.trim();
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("Password must be at least 8 characters long and include a number and an uppercase letter.");
    return false;
  }

  return true;
}
