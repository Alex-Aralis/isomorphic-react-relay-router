import { GRAPHQL_URL } from '../config';
import { prepareData, render as relayRender } from 'isomorphic-relay-router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import { DefaultNetworkLayer } from 'react-relay';
import routes from '../routes';

const networkLayer = new DefaultNetworkLayer(
  GRAPHQL_URL
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
