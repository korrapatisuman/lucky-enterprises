// simple client-side validation helpers

export function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPhone(phone) {
  return /^\d{10}$/.test(phone);
}

export function validateRegister({ name, email, phone, password }) {
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = "Enter a valid name";
  if (!email || !isEmail(email)) errors.email = "Enter a valid email";
  if (!phone || !isPhone(phone)) errors.phone = "Phone must be 10 digits";
  if (!password || password.length < 6) errors.password = "Password must be 6+ characters";
  return errors;
}
