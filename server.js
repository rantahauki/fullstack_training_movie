//console.log("Hello world!");



const express = require('express')
const app = express();
//app.listen(3000,() => console.log("Listening"));
const port = process.env.PORT || 3000; //HEROKU settings -> it will read env otherwise use port 3000
app.listen(port,() => console.log("Listening port:" + port));
app.use(express.static("public"));

app.use(express.json({limit: '1mb'}));

const review_data = [
    {
        "leffa": "Titanic",
        "arvostelu": "Klassikkokamaa",
        "arvostelija": "Suvi"
    },
    {
        "leffa": "Star Wars",
        "arvostelu": "Silmäkarkkia",
        "arvostelija": "Suvi 2"
    }
]

app.get('/api/reviews',function (request, response) {
  response.send(review_data);
})

app.post('/api/review',function (request, response) {
  console.log(request.body);
  review_data.push(request.body);
  response.send(200);
  console.log(review_data)
})
