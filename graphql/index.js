import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './types';
import resolvers from "./resolvers/User";

const schema = makeExecutableSchema({ typeDefs, resolvers});

export default schema;