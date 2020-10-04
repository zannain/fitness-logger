import React from "react";
import client from "./components/api";
import { ApolloProvider } from "@apollo/client";
import Nav from "./components/Nav/Nav";
import { Container } from "react-bootstrap";
import styled from 'styled-components'

const AppStyles=styled.div`
  margin: 0px;
`
function App() {
  return (
    <AppStyles>
      <ApolloProvider client={client}>
        <Container>
          <Nav></Nav>
        </Container>
      </ApolloProvider>
    </AppStyles>
  );
}

export default App;
