import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import Login from "./pages/Login";

const App = () => {
  return (
    <div style={{ backgroundColor: "#0891BF", height: "100vh" }}>
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
