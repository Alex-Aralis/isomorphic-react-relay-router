require('dotenv').load();

import { prepareData, render as relayRender } from 'isomorphic-relay-router';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import { DefaultNetworkLayer } from 'react-relay';
import routes from '../routes';

const {
  APP_PROTOCOL: PROTOCOL,
  APP_DOMAIN: DOMAIN,
  APP_PORT: PORT
} = process.env;

const networkLayer = new DefaultNetworkLayer(
  `${PROTOCOL}://${DOMAIN}:${PORT}/graphql`,
);

export default (req, res, next) => {
  match({ routes, location: req.originalUrl },
    (error, { pathname, search }, renderProps) => {
      if (error) {
        next(error);
      } else if (redirectLocation) {
        res.redirect(302, pathname + search);
      } else if (renderProps) {
        prepareData(renderProps, networkLayer).then(render).catch(next);
      } else {
        res.status(404).send('Not Found');
      }

      function render({data, props}) {
        const reactOutput = renderToString(relayRender(props));
        res.render('index', {
          reactOutput,
          preloadedDataJSON: JSON.stringify(data),
        })
      }
    })
}
