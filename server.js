const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./", "build", "index.html"));
});

app.listen(port, () => {
  console.log("server id running on port", port);
});
