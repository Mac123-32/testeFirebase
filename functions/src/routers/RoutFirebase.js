const express = require("express");

const route = express.Router();

const { db, keyRandom, ffunctions } = require("../config/serverFirebase");

route.get("/getdb", (req, res) => {
  (async () => {
    try {
      const doc = db.collection("users");
      const item = await doc.listDocuments();
      const response = item.map((ite) => {
        return ite;
      });
      return res.status(200).json({ umId: response });
    } catch (error) {
      return res.status(500).json({ error });
    }
  })();
});

route.get("/addUser", (req, res) => {
  const dataUser = req.body
  console.log(dataUser)
  /*
  ffunctions.auth.user().onCreate((user) => {
    ffunctions.logger.info("Hello functions", { structuredData: true });

    const datasReturn = db.collection("games");
    return datasReturn.doc(user.uid).set({
      displayName: user.displayName,
      emojis: "\u{1F43C}\u{1F33F}\u{2764}", // panda, herb, heart emoji
    });
  });
*/
  res.status(200).json({ msg: "My fivorite emoji \u{1F43C}" });
});

route.post("/product", async (req, res) => {
  try {
    await db
      .collection("product")
      .doc(keyRandom())
      .create({ name: req.body.name });

    return res.status(204).json({ message: "sucssec" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ err: error });
  }
});

module.exports = route;


/* TESTE VIDEO */

exports.addUserToFirestore = ffunctions.auth.user().onCreate((user) => {
  const userRef = admin.firestore().collection("users")
  return userRef.doc(user.uid).set({
    displayNmae: user.displayName,
    emojis: '\u{1F43C}'
  })
})