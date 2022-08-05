const admin = require("firebase-admin");
const ffunctions = require("firebase-functions")
const uuid = require("uuid");

var serviceAccount = require("../permission/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teste-a3596-default-rtdb.firebaseio.com",
});

// https://www.youtube.com/watch?v=rfdQHOB3jCU //00:30:00
// ffunctions.auth.user().onCreate()

const keyRandom = () => {
  const newUuid = uuid.v5();
  return newUuid;
};
const db = admin.firestore();

module.exports = { db, keyRandom, ffunctions };
/** */