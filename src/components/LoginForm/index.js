import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_USER_REQUEST } from "../../redux/actionTypes";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_USER_REQUEST, payload: { email, password } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="email">Type your email</label>
      <input
        className="outline-black"
        placeholder="Your email"
        name="email"
        onChange={({ target }) => setEmail(target.value)}
      ></input>
      <label for="password">Your password</label>
      <input
        className="outline-black"
        placeholder="Your password"
        name="password"
        onChange={({ target }) => setPassword(target.value)}
      ></input>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
