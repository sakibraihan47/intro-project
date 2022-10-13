const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send("User List");
});

app.listen(5000, (err) => {
  if (err) throw error;
  console.log(`ready on http://localhost:${5000}`);
});
