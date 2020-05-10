import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import {
  ApolloClient, // becomes client prop to the provider. //note that no consumer is needed here.
  HttpLink, // the important URI key from Heroku setup.
  InMemoryCache
 } from '@apollo/client'; // I appreciate these all in a single import since they all work together.

const GRAPHQL_ENPOINT = 'https://coding-with-sezgi.herokuapp.com/v1/graphql'; 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: GRAPHQL_ENPOINT
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
