import currentLang from '../../helpers/currentLang';

const url = "http://localhost:3000/api/v1/users/login";

const loginUser = async ({ email, password }) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cached: "no-cache",
    headers: {
      "Content-type": "application/json",
      "Accept-Language": currentLang
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ email, password }),
  });

  const user = await response.json();

  return user;
};

export default loginUser;
