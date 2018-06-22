import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Widgets } from "../modules/widgets";

const client = new ApolloClient();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Widgets />
    </ApolloProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
