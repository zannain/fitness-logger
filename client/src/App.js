import React from "react";
import client from "./components/api";
import { ApolloProvider } from "@apollo/client";
import Nav from "./components/Nav/Nav";
import { Container } from "react-bootstrap";

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Nav></Nav>
      </Container>
    </ApolloProvider>
  );
}

export default App;
