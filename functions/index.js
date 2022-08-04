const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const functions = require("firebase-functions");

const routFireb = require("./src/routers/RoutFirebase");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(routFireb);

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
