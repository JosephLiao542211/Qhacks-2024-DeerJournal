import { MongoClient } from "mongodb";
import express from 'express';
import logger from 'morgan';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'

const app = express();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const jwtCheck = auth({
    audience: process.env.BASE_URL as string,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL as string,
    tokenSigningAlg: 'RS256'
});

const port = process.env.PORT || 3000;

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication
app.get('/api/private', jwtCheck, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// async function run() {
//   const uri = process.env.MONGODB_KEY as string;

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