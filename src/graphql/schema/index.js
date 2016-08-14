import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

/*
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Echo') {
      return 0;
    }

    return null;
  },
  (obj) => {
    if (obj instanceof Echo) {
      return GraphQLEcho;
    }
    return null;
  }
);
*/

var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    echo: {
      type: GraphQLString,
      args: {
        message: {
          type: GraphQLString,
          defaultValue: 'NULL',
        },
      },
      resolve: (root, { message }) => `recieved ${message}`,
    }
  }
});

export default new GraphQLSchema({
  query,
});
