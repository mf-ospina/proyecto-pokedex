import React from "react";
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
