import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import '../../shared/app.css';

const client = Client.buildClient({
  storefrontAccessToken: 'c0ec5eab45c3f5a5041892ef47334493',
  domain: 'coinboxr.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
