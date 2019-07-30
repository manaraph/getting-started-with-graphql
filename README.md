# getting-started-with-graphql
> GraphQl API with Node 🚀

## Cloning Repository
> git clone https://github.com/manaraph/getting-started-with-graphql.git

## Setting up
- cd getting-started-with-graphql.
- To play around with graphql run npm install and then npm run trial
- Navigate into config folder and rename env.global to .env
- Setup your environment variables:
  - Set your host url default is http://localhost or http://127.0.0.1
  - Set up your port default is 4000
  - Add your MongoDB URI eg. "mongodb://<dbuser>:<dbpassword>@xxxxxxxx.mlab.com:57097/dbname"
    - Sign up on [mlab](https://mlab.com/).
    - Create a database, you use the free version for aws, google cloud or azure.
    - Create a user and password for your database (this correspond to your <dbuser> and <dbpassword> as seen in your MongoDB URI).
    - Please note the URI set in the url './config/.env.global' won't work. (this just a guide on how the URI looks like).

## Installation and running app with npm
``` bash

# install dependencies
npm install 

# Play with grapql app in at localhost:4000
npm run trial

# serve app in developer mode at localhost:4000
npm run dev

# serve app on production mode at localhost:4000
npm start

```

## Credits
Adapted from:
- [Creating a GraphQL server with NodeJS](https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6) - Aman Mittal
- [How to set up a GraphQL Server using Node.js, Express & MongoDB](https://medium.com/free-code-camp/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474) - Leonardo Maldonado
