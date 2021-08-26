const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const port = process.env.PORT || 8003;
const typeDefs = require('./Schema/types')
const resolvers = require('./Schema/resolvers');
require('./Startup/db')();



const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context:
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});



server.listen(port, () => console.log("Server running...."));

