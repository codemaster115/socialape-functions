const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require("./util/fbAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage } = require("./handlers/users");

//auth route
app.post("/login", login);
app.post("/signup", signup);
app.post("/user/image", FBAuth, uploadImage);

// scream route
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

exports.api = functions.region("europe-west1").https.onRequest(app);
