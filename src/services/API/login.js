const url = "https://localhost:3000/api/v1/auth";

const loginUser = async ({ email, password }) => {
  const response = await fetch(url, { email, password });
  const result = await response.json();

  const user = result.data;
  return user;
};

export default loginUser;
