import { mergeResolvers  } from 'merge-graphql-schemas';

import userResolver from './userResolver';

const resolvers = [userResolver];

export default mergeResolvers(resolvers);
