import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Chat } from './container/chat/chat';
import { WebSocketLink } from '@apollo/client/link/ws';
import './index.scss';
import Stream from './pages/stream/stream';

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_WS_URL,
  options: {
    reconnect: true
  }
});

const client = new ApolloClient({
  link: wsLink,
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Stream />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
