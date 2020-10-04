require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const WgerExercise = require('./data/wger-exercise');
require('./config');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            wger: new WgerExercise()
        };
    }
});

server.listen().then(({url})=> {
    console.log(`Listening on ${url}`);
});