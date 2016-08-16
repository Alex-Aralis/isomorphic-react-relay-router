import Relay from 'react-relay';

export const echo = () => Relay.QL`query { echo( message: "anybody out there?") }`;
