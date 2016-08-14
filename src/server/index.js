import express from 'express';
import graphQLHTTP from 'express-graphql';
import renderServerSide from './renderServerSide';
import { APP_PORT, APP_URL } from '../config';
import schema from '../graphql/schema';


const app = express();

app.set('views', './views');
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
  res.sendFile('app.js', { root: process.cwd() });
});

app.get('/*', renderServerSide);

app.listen(APP_PORT, () => {
  console.log(`App is now being served from ${APP_URL}`);
});
