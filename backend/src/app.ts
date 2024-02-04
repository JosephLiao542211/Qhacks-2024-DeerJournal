//references:
//https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/
//https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-access-control/spa/react-typescript/express-typescript

import { MongoClient } from "mongodb";
import express from "express";
import logger from "morgan";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";
import { messagesRouter } from "./messages/messages.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

import * as Chat from "./models"


const gpt_model = "gpt-3.5-turbo";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/test", (req: any, res: any) => {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

app.get("/api/chat/getQuestion", (req: any, res: any) => {
  res.json({
    response: Chat.getFirst()
  });
});

app.post("/api/chat/getMood", async (req: any, res: any) => {
  var resp = await Chat.getMood(req.body.history);
  res.json({
    response: resp
  });
});

app.post("/api/chat/getResponse", async (req: any, res: any) => {
  var resp = await Chat.getQR(gpt_model,req.body.history);
  res.json({
    response: resp
  });
});

app.post("/api/chat/getQ2", async (req: any, res: any) => {
  var resp = await Chat.secondQ(gpt_model,req.body.history);
  res.json({
    response: resp
  });
});

app.post("/api/chat/getQ3", async (req: any, res: any) => {
  var resp = await Chat.thirdQ(gpt_model,req.body.history);
  res.json({
    response: resp
  });
});

app.post("/api/chat/getGrateQ", async (req: any, res: any) => {
  var resp = Chat.getGratefulQ();
  res.json({
    response: resp
  });
});

app.post("/api/chat/gradResponse", async (req: any, res: any) => {
  var resp = await Chat.gratitudeQR(gpt_model,req.body.history);
  res.json({
    response: resp
  });
});

app.post("/api/chat/getGoalQ", async (req: any, res: any) => {
  var resp = Chat.getGoalQ();
  res.json({
    response: resp
  });
});

app.post("/api/chat/getGoodbye", async (req: any, res: any) => {
  var resp = Chat.getGoodbye();
  res.json({
    response: resp
  });
});

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
