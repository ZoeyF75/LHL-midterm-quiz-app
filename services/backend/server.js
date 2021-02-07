try {
  // load .env data into process.env
  require('dotenv').config();
} catch (e) { }

// Web server config
const PORT = process.env.NODE_PORT || 8080;
const ENV = process.env.NODE_ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg').native;
const dbParams = require('./lib/db.js');
const { getQuizzes } = require('./db/queries/quiz-queries');
const db = new Pool(dbParams);
// db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

const quizRoutes = require("./routes/make-quiz");
app.use("/api/quizzes", quizRoutes);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  const q = getQuizzes();
  res.json(q);
  // res.render("index");
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});