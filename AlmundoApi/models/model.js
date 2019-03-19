const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/hotel';
mongoose.connect(url, { useNewUrlParser: true });

const hotelSchema = new Schema({
    id: Number,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: Array
});

const models = {};
models.Hotels = mongoose.model('hotels', hotelSchema);

module.exports = models;