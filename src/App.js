import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import Login from "./pages/Login";

const App = () => {
  return (
    <div style={{ backgroundColor: " #0891BF " }}>
      <h1 className="text-center mt-28 font-mono text-4xl text-blue-500 font-bold transform hover:scale-50 transition ease-in duration-500 cursor-pointer tracking-wider">
        🤗 Welcome to Lost and found web app!
      </h1>
      <Login />
    </div>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
