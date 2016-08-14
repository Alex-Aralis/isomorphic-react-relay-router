import { GRAPHQL_URL } from '../config';
import IsomorphicRouter from 'isomorphic-relay-router';
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
    (error, redirectLocation, renderProps) => {
      if (error) {
        next(error);
      } else if (redirectLocation) {
        const { pathname, search } = edirectLocation;

        res.redirect(302, pathname + search);
      } else if (renderProps) {
        IsomorphicRouter.prepareData(renderProps, networkLayer)
          .then(render)
          .catch(next);

      } else {
        res.status(404).send('Not Found');
      }

      function render({data, props}) {
        const reactOutput = renderToString(IsomorphicRouter.render(props));
        res.render('index', {
          reactOutput,
          preloadedDataJSON: JSON.stringify(data),
        })
      }
    })
}
