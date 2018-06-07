const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { makeExecutableSchema } = require('graphql-tools');

const record = {
  firstName: 'John',
  lastName: 'Smith',
  image: 'http://thecatapi.com/api/images/get?format=src&type=gif',
  description: 'A guy',
};

const typeDefs = `
  type Query {
    profiles: [Profile]
    profile(id: String): Profile
  }

  type Profile {
    firstName: String
    lastName: String
    image: String
    description: String
  }
`;

const resolvers = {
  Query: {
    profiles: () => {
      if (process.env.BACKEND_URL) {
        return fetch(`${process.env.BACKEND_URL}/profiles`).then(res => res.data);
      } else {
        return [record];
      }
    },
    profile: (_, { id }) => {
      if (process.env.BACKEND_URL) {
        return fetch(`${process.env.BACKEND_URL}/profile/${id}`).then(res => res.data);
      } else {
        return record;
      }
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = {
  siteMetadata: {
    title: 'Learning React',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components'],
  developMiddleware: app => {
    app.use('/gql', cors(), bodyParser.json(), graphqlExpress({ schema }));
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/gql' }));
  }
}
