const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `Server is listening on ${PORT}, you can access it on your local machine at http://localhost:${PORT}`
  );
});

const csv = require("csvtojson");

app.get("/*", (req, res) => {
  const csvFilePath = "./resources/interactions.csv";
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      var stringToDisplay = JSON.stringify(jsonObj);
      res.setHeader("Content-Type", "application/json");
      res.write(stringToDisplay);
      res.end();
    });

  // res.json({ message: "Hello from server!" });
  // res.send(JSON.stringify(jsonObj));
});

// app.get("/api", (req, res) => {
//     getRegister();
//     res.json({ message: "Hello from server!" });
//     // res.send(JSON.stringify(jsonObj));
//   });

// app.get("/json", (req, res) => {
//     console.log(jsonObj);
//     res.json({ key: "value" });
//   });
