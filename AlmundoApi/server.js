const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('./models/model')

const cors = require('cors')
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
/*
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

let data;

mongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("hotel");
    dbo.collection("hotels").find({}).toArray((err, result) => {
        if (err) throw err;
        data = result;
        db.close();
    });
});*/

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.listen(process.env.PORT || 43568);

app.use('/api/hotels', require('./controllers/hotelController')(models.Hotels));
/*
app.route('/api/hotels').get((req, res) => { res.send(data); });

app.route('/api/hotels/:name').get((req, res) => {
    const hotelName = req.params['name'].toLowerCase();
    const result = data.filter((t) => t.name.toLowerCase().includes(hotelName));
    res.send(result);
});

app.route('/api/hotels').post((req, res) => { res.send(201, req.body); });

app.route('/api/cats/:name').put((req, res) => { res.send(200, req.body); });

*/