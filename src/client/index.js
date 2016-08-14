import React from 'react';
import { render } from 'react-dom';
import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRelayRouter from 'isomorphic-relay-router';
import { browserHistory, match, Router } from 'react-router';
import { Environment, DefaultNetworkLayer } from 'react-relay';
import routes from '../routes';


const environment = new Environment();

environment.injectNetworkLayer(new DefaultNetworkLayer('/graphql'));

const data = JSON.parse(document.getElementById('preloadedData').textContent);

IsomorphicRelay.injectPreparedData(environment, data);

const rootElement = document.getElementById('app');

match({routes, history: browserHistory },
  (error, redirectLocation, renderProps) => {
    IsomorphicRelayRouter.prepareInitialRender(environment, renderProps)
      .then(props => {
        render(<Router {...props} />, rootElement);
      });
  });
