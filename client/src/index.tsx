import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import client from './apolo/client';
import { Provider } from 'react-redux';

import App from './components/App';

import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
