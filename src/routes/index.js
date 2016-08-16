import App from '../components/App';
import Relay from 'react-relay';
import { echo } from '../relay/queries';

export default [
  {
    path: '/',
    component: App,
    // queries: { echo },
  },
];
