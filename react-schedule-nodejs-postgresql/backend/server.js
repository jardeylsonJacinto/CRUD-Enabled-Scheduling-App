let corsOptions = { origin: "http://localhost:3333" };
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
// set port, listen for requests
const PORT = process.env.PORT || 3334;

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Scheduler backend service." });
});
require("./routes/scheduler.routes")(app);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});