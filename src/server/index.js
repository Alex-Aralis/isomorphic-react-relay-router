require('dotenv').load();

import express from 'express';
import graphQLHTTP from 'exress-graphql';
import renderServerSide from './renderServerSide';

const app = express();

app.set('views', '../views');
app.set('view engine', 'jade');

import routes from '../routes';

app.use('/graphql', graphQLHTTP(
  {
    schema,
    pretty: true,
  }
));

app.get('/js/app.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile('app.js', { root: __dirname });
});

app.get('/*', renderServerSide);

app.listen(APP_PORT, () => {
  console.log(`
    App is now being served from
    http://localhost:${process.env.APP_PORT}.
  `);
});