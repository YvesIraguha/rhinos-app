import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux";
import { INITIAL_ACTION } from "./redux/actionTypes";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatchInitialAction = () => {
    store.dispatch({ type: INITIAL_ACTION, payload: { lastName: "Yves" } });
  };

  return (
    <div>
      <h1 className="text-center mt-28 font-mono text-4xl text-blue-500 font-bold transform hover:scale-50 transition ease-in duration-500 cursor-pointer tracking-wider">
        🤗 Welcome to Lost and found web app!
      </h1>
      <button onClick={dispatchInitialAction}>Dispatch initial action</button>
    </div>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
