import React from "react";
import client from "./components/api"
import { ApolloProvider } from "@apollo/client";
import Nav  from './components/Nav/Nav'
function App() {
  return (
    <ApolloProvider client={client}>
      <Nav></Nav>
    </ApolloProvider>
  );
}

export default App;
