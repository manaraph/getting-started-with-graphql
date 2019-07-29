import express from 'express'
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-bodyParser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

require('dotenv').config({ path: './config/.env'})

const app = express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;
const db = process.env.DB;  // set your database url in the environment variable or add it here

mongoose.connect( db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch( err => console.log(err));

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({ schema, graphiql: true })
);

app.listen( PORT, () => {
  console.log(`🚀 Server ready at http://${HOST}:${PORT}`)
})
