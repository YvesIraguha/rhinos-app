import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <h1 className="text-center mt-28 font-mono text-4xl text-blue-500 font-bold transform hover:scale-50 transition ease-in duration-500 cursor-pointer tracking-wider">
        🤗 Welcome to Lost and found web app!
      </h1>
      <LoginForm />
    </div>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
