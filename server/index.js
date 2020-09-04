const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const wger = require('./data/wger-exercise');
const WgerExercise = require('./data/wger-exercise');
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