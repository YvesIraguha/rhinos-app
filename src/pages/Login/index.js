import React from "react";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  return (
    <>
      <div className="login__container">
        <div
          style={{ backgroundColor: "red" }}
          className="rounded-full h-24 w-24 flex items-center justify-center mx-10 p-5"
        >
          <p>Logo</p>
        </div>
        <div className="flex justify-center mt-10" style={{ color: "white" }}>
          <p>Create Account</p>
        </div>
      </div>
      <form noValidate autoComplete="off">
        <div className="grid grid-cols-1 w-1/2 m-auto">
          <TextField label="First Name" placeholder="Joe" />
          <TextField label="Last name" placeholder="Doe" />
          <TextField label="Username" placeholder="jodoe" />
          <TextField label="Email" placeholder="joedoe12@doe.com" />
          <TextField label="Password" placeholder="#ir25&LTG" />
          <TextField label="Confirm password" placeholder="#ir25&LTG" />
          <button type="button" className="btn">
            Sign up
          </button>
          <p>Or</p>
          <button type="button" className="btn">
            Continue with google
          </button>
        </div>
      </form>
      <div className="login__bottom"></div>
    </>
  );
};

export default Login;
