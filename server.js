//console.log("Hello world!");

const express = require('express')
const app = express();
//app.listen(3000,() => console.log("Listening"));
const port = process.env.PORT || 3000; //HEROKU settings -> it will read env otherwise use port 3000
app.listen(port,() => console.log("Listening port:" + port));
app.use(express.static("public"));
