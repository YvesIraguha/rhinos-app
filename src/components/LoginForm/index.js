import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_USER_REQUEST", payload: { email, password } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="email">Type your email</label>
      <input
        name="email"
        onChange={({ target }) => setEmail(target.value)}
      ></input>
      <label for="password">Your password</label>
      <input
        name="password"
        onChange={({ target }) => setPassword(target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
