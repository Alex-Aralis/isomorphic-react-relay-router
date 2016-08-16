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

var GraphQLEcho = new GraphQLObjectType({
  name: 'Echo',
  args: {
    message: {
      type: GraphQLString,
    }
  },
  fields: {
    reponse: {
      type: GraphQLString,
      resolve: (obj, args) => {
        return `echo response: ${ args.message }`;
      }
    }
  },
  interfacees: [ nodeInterface ],
});

var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    echo: {
      type: GraphQLEcho,
    }
  }
});

export default new GraphQLSchema({
  query,
});
