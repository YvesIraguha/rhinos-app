import React from "react";
// import { Provider } from "react-redux";
// import { store } from "./redux";
// import LoginForm from "./components/LoginForm";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import ItemsList from "./containers/ItemsList";
import RecordItem from "./containers/RecordItem";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 className="text-center mt-28 font-mono text-4xl text-blue-500 font-bold transform hover:scale-50 transition ease-in duration-500 cursor-pointer tracking-wider">
          🤗 Welcome to Lost and found web app!
        </h1>
        <ItemsList />
        <RecordItem />
      </div>
    </ApolloProvider>
  );
};

export default App;
