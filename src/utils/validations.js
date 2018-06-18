export const isValidPasswordLength = password => password.length > 7;

export const isValidEmailFormat = value => {
  const regex = /\w+@\w+\.[a-zA-Z]/;
  return regex.test(value);
};
