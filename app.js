const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/routes");


var app = express();


const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }))

app.use("/api", route);

app.listen(port, () => {
    console.log(`server started at ${port}`)
})
