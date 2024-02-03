//references:
//https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/
//https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-access-control/spa/react-typescript/express-typescript


<<<<<<< HEAD
import { Document, MongoClient, OptionalId } from "mongodb";
=======
import { MongoClient } from "mongodb";
>>>>>>> 445b622b583678ce7b346ca7cfe53f2f98ea12a9
import express from 'express';
import logger from 'morgan';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import helmet from "helmet"
import nocache from "nocache"
import cors from "cors"
import { messagesRouter } from "./messages/messages.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error(
    "Missing required environment variables. Check docs for more info."
  );
}

const PORT = parseInt(process.env.PORT, 10);
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

//add env
require('dotenv').config({ path: '.env.local' });

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.set("json spaces", 2);

<<<<<<< HEAD
const port = process.env.PORT || 3000;
async function run() {
  const uri = process.env.MONGODB_URL as string;

  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  console.log(uri);
  const client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  const dbName = "cluster0";
  const collectionName = "users";

  // Create references to the database and collection in order to run
  // operations on them.
  const db = client.db(dbName);
  const collect = db.collection(collectionName);

  async function createUser(user: any) {
    const result = await collect.insertOne(user);
    console.log('User added:', result);
  }
  
  const user = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    current_goals : ['goal 1', 'goal 2', 'goal 3'],
    files: [
      { filename: 'document1.pdf', timestamp: new Date() },
      { filename: 'image.jpg', timestamp: new Date() },
    ],
  };
  
  // createUser(user);

  console.log(collect.estimatedDocumentCount)

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
run().catch(console.dir);



=======
app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);
>>>>>>> 445b622b583678ce7b346ca7cfe53f2f98ea12a9

app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});
app.use(nocache());

app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


// // Authorization middleware. When used, the Access Token must
// // exist and be verified against the Auth0 JSON Web Key Set.
// const jwtCheck = auth({
//     audience: process.env.BASE_URL as string,
//     issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL as string,
//     tokenSigningAlg: 'RS256'
// });

// const port = process.env.PORT || 3000;

// // This route doesn't need authentication
// app.get('/api/login', function (req, res) {
//   // TODO: The backend uses OpenID connect with Auth0 to authenticate the user and getting the id, access, and refresh tokens.
  
//   // TODO: The backend stores the user's tokens in a cache.

//   // TODO: An encrypted cookie is issued for the frontend representing the user authentication session.
//   res.json({
//     message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//   });
// });

// // This route needs authentication
// app.get('/api/private', jwtCheck, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// async function run() {
//   const uri = process.env.MONGODB_URL as string;

//   // The MongoClient is the object that references the connection to our
//   // datastore (Atlas, for example)
//   const client = new MongoClient(uri);

//   // The connect() method does not attempt a connection; instead it instructs
//   // the driver to connect using the settings provided when a connection
//   // is required.
//   await client.connect();

//   // Provide the name of the database and collection you want to use.
//   // If the database and/or collection do not exist, the driver and Atlas
//   // will create them automatically when you first write data.
//   const dbName = "cluster0";
//   const collectionName = "users";

//   // Create references to the database and collection in order to run
//   // operations on them.
//   const database = client.db(dbName);
//   const collection = database.collection(collectionName);

//   // Make sure to call close() on your client to perform cleanup operations
//   await client.close();
// }
// run().catch(console.dir);