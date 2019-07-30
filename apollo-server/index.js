// Graphql with apollo server express
import express from 'express'
import { ApolloServer } from 'apollo-server-express';

require('dotenv').config({ path: '../config/.env' || '../config/.env.global' })
const typeDefs = require('./api/schema');
const resolvers = require('./api/resolvers');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  playground: {
		settings: {
			'editor.theme': 'light'
		}
	}
});
server.applyMiddleware({ app });

app.get('/', (req, res) => res.send(`Babel is working. Check graphql here: http://${host}:${port}${server.graphqlPath}`))


app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`)
})
