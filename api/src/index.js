const { GraphQLServer } = require('graphql-yoga');


const { ApolloServer } = require('apollo-server');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const WgerExercise = require('../data/wger-exercise');
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     dataSources: () => {
//         return {
//             wger: new WgerExercise()
//         };
//     }
// });

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(({port})=> {
    console.log(`Listening on port: ${port}`);
});