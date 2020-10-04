require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const WgerExercise = require('./data/wger-exercise');
require('./src/config');
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