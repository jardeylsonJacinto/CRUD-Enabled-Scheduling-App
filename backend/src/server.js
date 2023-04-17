const bodyParser = require("body-parser");
const { routes } = require("./routes");
const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = { origin: "http://localhost:3333"};
const PORT = process.env.PORT || 3333;

const db = require("../models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, () =>{
  console.log(`Server is runnig on port ${PORT}`);
})
